module.exports = (req, res, next)=>{
    const mysql = require('mysql');
    const databaseError = require('../Exceptions/databaseError');

    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
    });

    const con1 = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "mydb",
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        let sql =  "CREATE DATABASE IF NOT EXISTS mydb";
        con.query(sql, function (err, result) {
            if (err) throw new databaseError('database failed');
            console.log("Database created");
        });
        con.end();
        con1.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            let sql = "CREATE TABLE IF NOT EXISTS user (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), password INT)";
            con1.query(sql, function (err, result) {
            if (err) throw new databseError('Table creation  Failed');
            console.log("Table created");
            });
            con1.end();
        });
    });
    next();
}