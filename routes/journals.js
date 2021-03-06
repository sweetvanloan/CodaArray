const express = require("express");
const router = express.Router();
const journalCtrl = require("../controllers/journals")

router.get('/', journalCtrl.index);
router.get("/edit/:id", isLoggedIn, journalCtrl.editor)
router.post('/', isLoggedIn, journalCtrl.addEntry);
router.delete("/:id", isLoggedIn, journalCtrl.delEntry);
router.put("/edit/:id", isLoggedIn, journalCtrl.editEntry)



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google")
};


module.exports = router;