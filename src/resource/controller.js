const pool = require('../../db');
const Query = require('../resource/query');


const getUserResource = (req,res) => {
    const phonenumber = parseInt(req.params.phonenumber);
    pool.query(Query.getUserResource, [phonenumber], (error, results)=>{
        if(error) throw console.error(error);
        res.status(200).json(results.rows);
    });
};
module.exports = {
    getUserResource
};