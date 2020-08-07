const express = require("express");
const router = express.Router();
const skillCtrl = require("../controllers/skills");


router.post("/", isLoggedIn, skillCtrl.addSkill)
router.delete("/:id", isLoggedIn, skillCtrl.delSkill)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google")
};


module.exports = router;