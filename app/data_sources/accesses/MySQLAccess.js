var mysql  = require('mysql');
var logger = require('../../utils/logger');
var fs = require('fs');
var config = JSON.parse(fs.readFileSync('config/mysql.json', 'utf8'));
var env = process.argv[2];
var conn = config[env];

var connection = mysql.createPool({
  host     : conn.host,
  user     : conn.user,
  password : conn.password,
  database : conn.database
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
