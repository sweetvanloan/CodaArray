const User = require("../models/user");
const {
    db
} = require("../models/user");

module.exports = {
    addEntry,
    delEntry,
    editEntry,
    editor,
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

function editor(req, res) {
    const journal = req.user.journal.id(req.params.id)
    res.render("journals/edit", {
        journal,
        user: req.user
    });

}

function editEntry(req, res) {
    const journal = req.user.journal.id(req.params.id)
    journal.overwrite(req.body)
    req.user.save(function(err) {
        res.redirect("/user/")
    })
}