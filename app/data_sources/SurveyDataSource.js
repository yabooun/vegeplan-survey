const db = require('../data_sources/accesses/MySQLAccess.js');

exports.findServey = function (id, callback) {
    db.query('select * from survey where ? ', {'code': id}, function(success, result) {
        if (success) {
            callback(true, result);
        } else {
            callback(false, null);
        }
    });
};

exports.saveServey = function (id, form, callback) {
    if (!form) {
        callback(false);
        return;
    }
    form.code = id;
    db.query('insert into survey_log (code, gender, age, work, count, scene, satisfaction, request) values (?, ?, ?, ?, ?, ?, ?, ?)',[
        id,
        form['gender'],
        form['age'],
        form['work'],
        form['count'],
        form['scene'],
        form['satisfaction'],
        form['request']
    ], function(success, result) {
        callback(success);
    });
};