
const getUserResource = "select * from user_resource where phonenumber = $1";
const topupBalance = `UPDATE user_resource SET mainbalance = mainbalance + $1 WHERE phonenumber = $2`;
const increaseValidity = `UPDATE user_resource SET mainvalidity = mainvalidity + $1 WHERE phonenumber = $2`;

module.exports = {

    getUserResource,
    topupBalance,
    increaseValidity
};