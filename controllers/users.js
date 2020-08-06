const User = require("../models/user")
    // const Skill = require("../models/skill")

module.exports = {
    index
}


function index(req, res) {
    User.findById(
        req.user._id
    ).populate("journal").populate("skill").exec(function(err, user) {
        res.render('users/index', {
            user
        });
    });
}