const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var GuildSchema = new Schema({
    id: {
        type: String,
    },
    prefix: {
        type: String, default: "i."
    }
})

const Guilds = mongoose.model("Guilds", GuildSchema)
module.exports = Guilds;