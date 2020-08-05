const User = require("../models/user")
    // const Skill = require("../models/skill")

module.exports = {
    addEntry,
    delEntry,
    index
}

function index(req, res) {
    User.find({}, function(err, users) {
        res.render("journals/index", {
            users,
            user: req.user
        });

    })
}

function addEntry(req, res) {
    console.log("REQQ.BODY I  ADDENTRY ", req.body)
    req.user.journal.push(req.body);
    req.user.save(function(err) {
        res.redirect("/journals/")

    })
}

function delEntry(req, res) {
    req.user.journal._id.delete(req.body);
    res.redirect("/journals/")
        // req.user.journal.deleteOne(req.params);
}