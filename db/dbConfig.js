const mysql2 = require("mysql2");

const dbconnection = mysql2.createPool({
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    password: process.env.MYSQL_PASSWORD,
    connectionLimit: 10,
    ssl: {
        rejectUnauthorized: false, 
    },
    connectTimeout: 10000
});


module.exports = dbconnection.promise()