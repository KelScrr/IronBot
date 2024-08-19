const mongoose = require('mongoose');

module.exports = {
  start() {
    try {
      mongoose.connect('mongodb+srv://admin:admin@cluster0.ce98y.mongodb.net/Cluster0?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      })
      console.log("DATABASE: Database iniciada.")
    } catch (err) {
      if (err) return console.log("DATABASE: " + err)
    }
  }
}