const express = require("express")
const bodyParser = require("body-parser")
const app = express()

// min express if you want to send the json data
// you first need to parse the json data
app.use(express.json())

app.post("/add",(req,res)=>{
    console.log(req.body)
    let a = parseInt(req.body.a)
    let b = parseInt(req.body.b)
    res.json({
        result: a+b
    })
})

app.listen(3000)
