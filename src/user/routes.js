const {Router} = require('express');
const router = Router();
const controller = require ('./controller')


router.get("/", controller.getUser);
router.get("/:phonenumber", controller.getUserbyPhoneNumber);
router.post("/", controller.addUser);
router.get("/byID/:idcard", controller.getUserbyIDCard);
module.exports = router;