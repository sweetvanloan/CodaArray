const express = require("express");
const router = express.Router();
const skillCtrl = require("../controllers/skills")

router.get('/', skillCtrl.index);

module.exports = router;