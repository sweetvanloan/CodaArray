const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalSchema = new Schema({
    Entry: String,
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
});

module.exports = mongoose.model("User", userSchema);