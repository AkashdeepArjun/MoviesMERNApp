import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dbSetUp from "./database/index.js"
import router from "./routes/Routings.js"
const app = express()
const config_port = 3000

import qs from 'qs'


app.set('query parser', function(str) {
  return qs.parse(str, { /* custom options */ })
})

app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())


app.use(bodyParser.json())

// app.get('/',(req,res)=>res.send("Welcome to Web MERN development"))

app.use('/', router)

dbSetUp()
app.listen(config_port, () => console.log("yay! server started"))


