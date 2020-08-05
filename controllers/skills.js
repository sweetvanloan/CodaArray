const User = require("../models/user")
const Skill = require("../models/skill")

module.exports = {
    addSkill,
    delSkill,
    index
}

function addSkill() {
    req.user.skills.push(req.body);
    req.user.save(function(err) {
        res.redirect("/user/")
    })
}

function delSkill() {
    //allows users to delete skills on their user profile and only their profile 
}

function index() {

}