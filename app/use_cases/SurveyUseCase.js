var dataSource = require('../data_sources/SurveyDataSource.js');
var logger = require('../utils/logger.js');
var dateUtils = require('date-utils');

exports.findServey = function(id, callback) {
    if (!id) {
        callback(false, null);
    }
    dataSource.findServey(id, function(success, result) {
        if (success && result && result instanceof Array) {
            callback(true, result);
        } else {
            callback(false, null);
        }
    });
}

exports.saveServey = function(id, form, callback) {
    if (!id || !form) {
        callback(false);
    }

    // ログ出力
    var now = new Date();
    form['log_date'] = now.toFormat("YYYY-MM-DD HH24:MI:SS");
    logger.answer.info('test');
    logger.answer.info(JSON.stringify(form));

    // DBへ保存
    dataSource.saveServey(id, form, function(success, result) {
        callback(success);
    });

}