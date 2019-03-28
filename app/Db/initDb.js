module.exports = (req, res, next)=>{
    const mysql = require('mysql');
    const databaseError = require('../Exceptions/databaseError');

    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        let sql =  "CREATE DATABASE IF NOT EXISTS devDb";
        con.query(sql, function (err, result) {
            if (err) throw new databaseError('database failed');
            console.log("Database created");
        });
        con.end();
    });
    next();
}