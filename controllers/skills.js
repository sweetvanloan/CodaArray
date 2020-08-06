const User = require("../models/user")
const Skill = require("../models/skill")
const user = require("../models/user")

module.exports = {
    addSkill,
    delSkill,
    editSkill,
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
    const skillIdx = req.user.skill.indexOf(req.params.id);
    req.user.skill.splice(skillIdx, 1);
    Skill.findByIdAndDelete(req.params.id, function(err) {
        req.user.save(function(err) {
            res.redirect("/user/")
        })
    });
}


function editSkill(req, res) {
    const thisSkillIdx = req.user.skill.indexOf(req.params.id);

    thisSkillIdx.findByIdAndUpdate(req.params.id, function(err) {


    })


    $(".submit").click(function() {


        const userInput = $("#userInput").val();

        console.log(userInput);

        const newElement = "<p>" + userInput + "</p>"

        $("#page").append(newElement)
    });


    req.user.save(function(err) {
        res.redirect("/user/")
    })

}