const User = require("../models/user")
    // const Skill = require("../models/skill")

module.exports = {
    addEntry,
    delEntry,
    editEntry,
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
    req.user.journal.push(req.body);
    req.user.save(function(err) {
        res.redirect("/user/")

    })
}

function delEntry(req, res) {
    req.user.journal.pull(req.params.id);
    req.user.save(function(err) {
        res.redirect("/user/")
    })
}

function editEntry(req, res) {
    req.user.journal.pull(req.params.id);
    req.user.save(function(err) {
        res.redirect("/user/")
    })
}