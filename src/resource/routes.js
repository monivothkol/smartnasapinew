const {Router} = require('express');
const router = Router();
const controller = require ('../resource/controller');



router.get("/:phonenumber", controller.getUserResource);
router.put('/topupBalance', controller.updateMainBalance);



module.exports = router;

// module.exports = {
//     mainRouter: router,
//     userResourceRouter: userResourceRouter
//   };