const express = require('express');
const connectDB = require('./db/conn');
const morgan = require('morgan');
const route  = require('./routes/route');
require('dotenv').config()

const PORT = process.env.PORT || 5000;

//connecting database
connectDB();

//creating app object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(route);

app.get("/", (req, res) => {
  res.status(200).json("server start");
});

app.listen(PORT, () => {
  console.log(`Server started at port no. ${PORT}`.bgMagenta.white)
})