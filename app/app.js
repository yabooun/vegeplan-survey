var express = require("express");
var partials = require('express-partials');
var app = express();
var survey = require('./use_cases/SurveyUseCase.js');
var logger = require('./utils/logger.js');
var bodyParser = require('body-parser');

// ejs設定
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(partials());

// フォーム設定
app.use(bodyParser());

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
    console.log("Node.js is listening to PORT:" + server.address().port);
});