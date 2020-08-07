const Skill = require("../models/skill")


module.exports = {
    addSkill,
    delSkill,
}

function addSkill(req, res) {
    const skill = new Skill(req.body)
    req.user.skill.push(skill._id)
    skill.save(function(err) {
        req.user.save(function(err) {
            res.redirect("/user/")
        })
    });

}

function delSkill(req, res) {
    const skillIdx = req.user.skill.indexOf(req.params.id);
    req.user.skill.splice(skillIdx, 1);
    Skill.findByIdAndDelete(req.params.id, function(err) {
        req.user.save(function(err) {
            res.redirect("/user/")
        })
    });
}