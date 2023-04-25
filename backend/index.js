const express = require("express")
const mongoose = require("mongoose")
const { connect } = require("./db/config")
require("dotenv").config()
const  { Router } = require('./Routes/routes')
const Profiles  = require("./db/model")
const { schema } = require("./db/model")


const app = express()
connect();

app.use(express.json())
app.use("/", Router)

app.listen(process.env.PORT, ()=>{
    console.log('Connected at port', process.env.PORT)
    console.log(Profiles)
})

