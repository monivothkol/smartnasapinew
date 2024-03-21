const getUser = "select * from user_profile";
const getUserbyPhoneNumber = "select * from user_profile where phonenumber = $1";
const checkPhoneNumber = "select s from user_profile s where s.phonenumber = $1";
const addUser = "insert into user_profile (phonenumber, idcard, firstname, lastname, address, gennder) values($1, $2, $3, $4, $5, $6)";
const getUserbyIDCard = "select * from user_profile where idcard = $1";

const getUserResource = "select * from user_resource where phonenumber = $1"

module.exports = {
    getUser,
    getUserbyPhoneNumber,
    checkPhoneNumber,
    addUser,
    getUserbyIDCard,
    getUserResource
};