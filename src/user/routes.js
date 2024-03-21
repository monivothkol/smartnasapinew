const {Router} = require('express');
const router = Router();
const controller = require ('./controller')
const userResourceRouter = Router()

router.get("/", controller.getUser);
router.get("/:phonenumber", controller.getUserbyPhoneNumber);
//router.get("/user_resource/:phonenumber", controller.getUserResource);
router.post("/", controller.addUser);
router.get("/byID/:idcard", controller.getUserbyIDCard);


userResourceRouter.get("/:phonenumber", controller.getUserResource);

module.exports = router;
module.exports = userResourceRouter;