const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const skill = require("./skill")

const journalSchema = new Schema({
    entry: String,
    date: {
        type: Date
    }
});


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarURL: String,
    googleId: String,
    language: {
        type: String,
        enum: ["Ruby", "JavaScript", "C#", "C++", "Python", "Java", "Swift", "PHP", "Perl", "Go"],
    },
    journal: [journalSchema],
    skill: [{
        type: Schema.Types.ObjectId,
        ref: "Skill"
    }]
});

module.exports = mongoose.model("User", userSchema);