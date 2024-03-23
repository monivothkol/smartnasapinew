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
    pool.query(Query.topupBalance, [mainbalance, phonenumber], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        // Return success response
        res.status(200).json({ message: 'Mainbalance updated successfully' });
    });
};

const increaseValidity = (req, res) => {
    const {phonenumber, validity} = req.body;
    pool.query(Query.increaseValidity, [validity, phonenumber], (error, results) => {
        if(error){
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(200).json({ message: 'Validity updated successfully' });
    });
};
module.exports = {
    getUserResource,
    updateMainBalance,
    increaseValidity
};