
const getUserResource = "select * from user_resource where phonenumber = $1";
const updateMainBalance = `
    UPDATE user_resource 
    SET mainbalance = $1 
    WHERE phonenumber = $2
`;
module.exports = {

    getUserResource,
    updateMainBalance
};