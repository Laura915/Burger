// ORM file, holds burger methods 
const connection = require('../config/connection.js');

// Object for all our SQL methods.
const orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }

}
module.exports = orm;
