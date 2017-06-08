var dataSource = require('../data_sources/SurveyDataSource.js');

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