const {Router} = require('express');
const router = Router();
const controller = require ('./controller');


router.get("/", controller.getUser);
router.get("/:phonenumber", controller.getUserbyPhoneNumber);
//router.get("/user_resource/:phonenumber", controller.getUserResource);
router.post("/", controller.addUser);
router.get("/byID/:idcard", controller.getUserbyIDCard);




module.exports = router;

// module.exports = {
//     mainRouter: router,
//     userResourceRouter: userResourceRouter
//   };