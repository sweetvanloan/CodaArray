const express = require("express");
const router = express.Router();
const skillCtrl = require("../controllers/skills")

router.get("/", skillCtrl.index);
router.post("/", skillCtrl.addSkill)
router.post("/", isLoggedIn, skillCtrl.addSkill)



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google")
};


module.exports = router;