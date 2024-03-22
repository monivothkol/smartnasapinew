const pool = require('../../db');
const Query = require('./query');
const getUser = (req, res) =>
{
    pool.query(Query.getUser, (error, result) =>{
        if(error) throw error;
        res.status(200).json(result.rows);
    } );
};

const getUserbyPhoneNumber = (req,res) => {
    const phoneNumber = parseInt(req.params.phonenumber);
    pool.query(Query.getUserbyPhoneNumber, [phoneNumber], (error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};  

const addUser = (req, res) => {
    const {phonenumber, idcard, firstname, lastname, address, gennder} = req.body;
    //check phonenumber
    pool.query(Query.checkPhoneNumber, [phonenumber], (error, results) =>{
        if(results.rows.length){
            res.send("Phone number already exist");
        }

        //add user
        pool.query(Query.addUser, [phonenumber, idcard, firstname, lastname, address, gennder], (error, resolve) => {
            if(error) throw error;
            res.status(201).send("User added successfully");
            
        })
    })
};

const getUserbyIDCard = (req,res) => {
    const idcard = parseInt(req.params.idcard);
    console.log('ID card:', idcard)
    pool.query(Query.getUserbyIDCard, [idcard], (error, results)=>{
        if(error) throw console.error(error);
        res.status(200).json(results.rows);
    });
};
module.exports = {
    getUser,
    getUserbyPhoneNumber,
    addUser,
    getUserbyIDCard,
};