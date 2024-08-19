const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ClientSchema = new Schema({
    id: {
        type: String,
    },
    usos: {
        type: Number,
        default: 0
      },
      manu: {
        type: Boolean,
        default: false
      },
      reason: {
        type: String,
      },
      lastError: {
        type: String,
        default: "Nenhum"
      },
      botmanu: {
        type: Boolean,
        default: false
      },
})

const Client = mongoose.model("Client", ClientSchema)
module.exports = Client;