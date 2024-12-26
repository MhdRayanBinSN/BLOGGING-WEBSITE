const mysql = require('mysql2');
require('dotenv').config();
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database :process.env.DB_NAME,
    port:3307
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error("Error in connection:", err.message);
        process.exit(1);
    } else {
        console.log("Database connected");
        connection.release(); // Return connection to the pool
    }
});

module.exports = pool;
