const Pool = require('pg').Pool;
const pool = new Pool({
        user: 'mebdubdr',
        host: 'bubble.db.elephantsql.com',
        // database: 'smartnas_db',
        database: "mebdubdr",
        password: 'BGGguNuWZylRx0NOywm8JqeTf0DKmcvb',
        port: '5432',
        ssl: {
                rejectUnauthorized: false,
                sslmode: 'require'
            }
});


module.exports = pool;

