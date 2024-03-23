const {Router} = require('express');
const router = Router();
const controller = require ('../resource/controller');



router.get("/:phonenumber", controller.getUserResource);
router.put('/updateMainBalance', controller.updateMainBalance);



module.exports = router;

// module.exports = {
//     mainRouter: router,
//     userResourceRouter: userResourceRouter
//   };