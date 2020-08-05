const User = require("../models/user")
    // const Skill = require("../models/skill")

module.exports = {
    index
}


function index(req, res) {
    // console.log("Req.user is ", req.user)

    User.findById(
        req.user._id
    ).populate("journal").exec(function(err, user) {
        console.log("USER IS: ", user);
        console.log("REQ.USER IS ", req.user);
        res.render('users/index', {
            user,
            // user: req.user
        });
    });
}