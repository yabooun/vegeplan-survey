var mysql  = require('mysql');
var logger = require('../../utils/logger');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'vegeplan'
});

connection.connect(function(err) {
    if (err) {
        callback(false, null);
        logger.app.error('MySQLAccess: error connecting: ' + err.stack);
        return;
    }
    logger.app.info('MySQLAccess: connected as id ' + connection.threadId);
});

exports.query = function (sql, condition, callback) {
    // クエリログ
    logger.query.info(sql + ' | ' + JSON.stringify(condition));
    connection.query(sql, condition, function(error, results, fields) {
        if (error) {
            callback(false, null);
        }
        callback(true, results);
    });
};
