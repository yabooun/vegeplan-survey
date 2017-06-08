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