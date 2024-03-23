const {Router} = require('express');
const router = Router();
const controller = require ('../resource/controller');



router.get("/:phonenumber", controller.getUserResource);
router.put('/topupBalance', controller.updateMainBalance);
router.put('/increaseValidity', controller.increaseValidity);



module.exports = router;

// module.exports = {
//     mainRouter: router,
//     userResourceRouter: userResourceRouter
//   };