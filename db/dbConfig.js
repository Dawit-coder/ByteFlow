const mysql2 = require("mysql2");

const dbconnection = mysql2.createPool({
    user: process.env.USER,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.PORT,
    password: process.env.PASSWORD,
    connectionLimit: 10,
    ssl: {
        rejectUnauthorized: false, 
    },
    connectTimeout: 10000
});


module.exports = dbconnection.promise()