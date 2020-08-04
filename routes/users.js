const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/journals")

router.get('/', userCtrl.index);

module.exports = router;