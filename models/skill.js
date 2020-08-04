const mongoose = required("mongoose");
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    skill: String,
    level: {
        type: Number,
        max: 5,
        min: 1,
        required: true,
        default: 1
    }
});


module.exports = mongoose.model("Skill", skillSchema)