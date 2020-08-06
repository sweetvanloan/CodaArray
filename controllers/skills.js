const User = require("../models/user")
const Skill = require("../models/skill")

module.exports = {
    addSkill,
    delSkill,
    editSkill,
    index
}

function addSkill(req, res) {
    //create skill
    const skill = new Skill(req.body)
        //push skill id to user
    req.user.skill.push(skill._id)
        //save both user and skill
    skill.save(function(err) {
        req.user.save(function(err) {
            res.redirect("/user/")
        })
    });

}

function delSkill(req, res) {

}

function index() {

}

function editSkill() {

}