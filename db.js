const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database :'blog',
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
