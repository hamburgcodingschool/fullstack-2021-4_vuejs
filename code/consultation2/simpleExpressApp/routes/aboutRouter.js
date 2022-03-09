const router = require("express").Router();
const aboutController = require("../controllers/aboutController");

router.get("/", aboutController.root);
router.get("/hello", aboutController.hello);

module.exports = router;