var express = require("express");
var app = express();
var survey = require('./use_cases/SurveyUseCase.js');
var logger = require('./utils/logger.js');

// ejs設定
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// ログ設定
app.use(logger.express);

// ルーティング
app.use(express.static('./public'));
app.get("/survey/:id", function(req, res, next){
    console.log(req.params.id);
    survey.findServey(req.params.id, function(success, result) {
        if (success) {
            res.render('index', {surveyList: result});
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