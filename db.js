const Pool = require('pg').Pool;
const pool = new Pool({
        user: 'postgres',
        host: 'smartnas.c342mwwkot91.ap-southeast-2.rds.amazonaws.com',
        database: 'smartnas_db',
        password: 'monivothkol098909004',
        port: '5432',
        ssl: {
                rejectUnauthorized: false
            }
});


module.exports = pool;

