const Pool = require('pg').Pool;
const pool = new Pool({
        //user: 'postgres',
        //host: 'postgres://mebdubdr:BGGguNuWZylRx0NOywm8JqeTf0DKmcvb@bubble.db.elephantsql.com/mebdubdr',
        
        connectionString: 'postgres://mebdubdr:BGGguNuWZylRx0NOywm8JqeTf0DKmcvb@bubble.db.elephantsql.com/mebdubdr',

        // database: 'smartnas_db',
        // password: 'monivothkol098909004',
        //port: '5432',
        // ssl: {
        //         rejectUnauthorized: false
        //     }
        }
);
pool.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('SELECT NOW() AS "theTime"', function(err, result) {
          if(err) {
            return console.error('error running query', err);
          }
          console.log(result.rows[0].theTime);
          // >> output: 2018-08-23T14:02:57.117Z
        });
      
      });


module.exports = pool;

