var express = require("express");
var partials = require('express-partials');
var app = express();
var survey = require('./use_cases/SurveyUseCase.js');
var logger = require('./utils/logger.js');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var logger = require('./utils/logger');

// ejs設定
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(partials());

// フォーム設定
app.use(bodyParser());
app.use(methodOverride());
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

// ログ設定
app.use(logger.express);

// ルーティング
app.use(express.static('./public'));

// アンケートフォームの表示
app.get("/survey/:id", function(req, res, next){
    survey.findServey(req.params.id, function(success, result) {
        if (success) {
            res.render('index', {surveyList: result});
        } else {
            res.render('error');
        }
        res.end();
    });
});

// アンケートフォームのsubmit
app.post("/survey/:id", function(req, res, next){
    survey.saveServey(req.params.id, req.body, function(success, result) {
        if (success) {
            res.render('complete');
        } else {
            res.render('error');
        }
        res.end();
    });
});


// サーバ起動
var server = app.listen(3000, function(){
    logger.app.info("Node.js is listening to PORT:" + server.address().port);
});

// エラーハンドラ
function logErrors(err, req, res, next) {
  logger.app.error(err.stack);
  next(err);
}

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'System Error' });
  } else {
    next(err);
  }
}

function errorHandler(err, req, res, next) {
  res.status(500);
  res.send('System Error');
}