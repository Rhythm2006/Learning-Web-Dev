const express = require("express")
const cors = require("cors")
const app = express()


app.use(express.json())
app.use(cors())

app.post("/sum",(req,res)=>{
    const a = parseInt(req.body.a)
    const b = parseInt(req.body.b)
    res.json({
        answer: a+b
    })
})
app.listen(3000)

// npx serve, serves a folder over http 
// you do not have to do the cross origin domain stuff if your frontend and backend working on the same port
//  app.get("/",function(req,res){
//      res.sendFile(__dirname+"/middleware/cors/public/index.html")
//  }).

// cors; how can this frontend get the information from another endpoint 
