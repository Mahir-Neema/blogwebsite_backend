const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const mongoUrl = process.env.MONGO_URL

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch(e => console.error(e));



app.use("/",(req,res)=>{
    console.log("fndsf");
})

app.listen("5000",()=>{
    console.log("Backend running");
})