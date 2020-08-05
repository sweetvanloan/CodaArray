const express = require("express");
const router = express.Router();
const journalCtrl = require("../controllers/journals")

router.get('/', journalCtrl.index);
router.post('/', isLoggedIn, journalCtrl.addEntry);
router.delete("/journals/:id", isLoggedIn, journalCtrl.delEntry);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google")
};


module.exports = router;