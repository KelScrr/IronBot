const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    idU: {
        type: String,
    },
    idS: {
        type: String,
    }
})

const User = mongoose.model("Users", UserSchema)
module.exports = User;