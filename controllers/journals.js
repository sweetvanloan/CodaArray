const User = require("../models/user");
const {
    db
} = require("../models/user");
// const Skill = require("../models/skill")

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

//drilling down into the user to find the specific journal entry
//to pass and render onto edit.ejs for the user to edit
//possibly more specific??
function editor(req, res) {
    // User.find({}, function(err, users) {
    const journal = req.user.journal.id(req.params.id)
    res.render("journals/edit", { //maybe journals/edit/:id??? OR edit/??? 
        // users,
        journal,
        user: req.user
    });
    // console.log("😁WHAT IS: ", entry)
    // editEntry(entry);
    // })
}




function addEntry(req, res) {
    req.user.journal.push(req.body);
    req.user.save(function(err) {
        res.redirect("/user/")

    })
}

function delEntry(req, res) {
    console.log("REQ.PARAMS is ", req.params)
    console.log("REQ.PRARAMS.ID ", req.params._id)
    req.user.journal.pull(req.params.id);
    req.user.save(function(err) {
        res.redirect("/user/")
    })
}

function editEntry(req, res) {
    // console.log("REQ: ", req)
    // req.user.journal.Update(req.params.id, input);
    // console.log("REQ.USER is ", req.user);
    const journal = req.user.journal.id(req.params.id)
    journal.overwrite(req.body)


    req.user.save(function(err) {
        res.redirect("/user/")
    })

}

// function editEntry(req, res) {
//     console.log("REQ.USER is ", req.user);
//     req.user.journal.Update(req.params.id);
//     res.redirect("/user/")

//     req.user.save(function(err) {
//         res.redirect("/user/")
//     })

// }

// function editEntry(req, res) {
//     req.user.journal.findOne({
//         "_id": req.params.id
//     }).then(
//         journal => {
//             console.log("Journal is: ", journal);
//             res.send(journal)
//         }
//     )

// }