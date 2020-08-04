const User = require("../models/user");
// const Skill = require("../models/skill")

module.exports = {
    addEntry,
    delEntry,
    index
}

function index(req, res) {
    User.find({}, function(err, users) {
        console.log("users is: ", users)
        res.render("journals/index", {
            users,
            user: req.user
        });

    })
}

function addEntry() {
    //allows user to add an entry to their journal
}

function delEntry() {
    //allows user to delete an entry from their journal 
}