const Pool = require('pg').Pool;
const pool = new Pool({
        //user: 'postgres',
        host: 'postgres://mebdubdr:BGGguNuWZylRx0NOywm8JqeTf0DKmcvb@bubble.db.elephantsql.com/mebdubdr',
        // database: 'smartnas_db',
        //password: 'BGGguNuWZylRx0NOywm8JqeTf0DKmcvb',
        //port: '5432',
        //ssl: {
            //    rejectUnauthorized: false
           // }
});


module.exports = pool;

