const User = require("../models/user")

module.exports = {
    sayName,
    index
}

function sayName() {
    //have the user screen say "hello, <username>"
}

function index(req, res) {
    User.find({}, function(err, users) {
        res.render('users/index', {
            users,
            user: req.user
        });
    });
}