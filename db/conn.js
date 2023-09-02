const { default: mongoose } = require("mongoose");
const colors = require('colors');

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log(`Database is connected ${mongoose.connection.host}`.bgBlue.white)
  }).catch((err) => {
    console.log(`Mongo error ${err}`)
  })
}

module.exports = connectDB;