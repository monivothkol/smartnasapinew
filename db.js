const Pool = require('pg').Pool;
const pool = new Pool({
        user: 'mebdubdr',
        host: 'bubble.db.elephantsql.com',
        // database: 'smartnas_db',
        database: "smartnas",
         password: 'BGGguNuWZylRx0NOywm8JqeTf0DKmcvb',
        port: '5432',
        ssl: {
                rejectUnauthorized: false
            }
});


module.exports = pool;

