const pool = require('../../db');
const Query = require('../resource/query');


const getUserResource = (req,res) => {
    const phonenumber = parseInt(req.params.phonenumber);
    pool.query(Query.getUserResource, [phonenumber], (error, results)=>{
        if(error) throw console.error(error);
        res.status(200).json(results.rows);
    });
};

const updateMainBalance = (req, res) => {
    const { phonenumber, mainbalance } = req.body;

    // Update mainbalance in the database
    pool.query(Query.updateMainBalance, [mainbalance, phonenumber], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        // Return success response
        res.status(200).json({ message: 'Mainbalance updated successfully' });
    });
};
module.exports = {
    getUserResource,
    updateMainBalance
};