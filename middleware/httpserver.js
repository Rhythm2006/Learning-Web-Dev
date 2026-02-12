const express = require("express")
const app = express()
function logger(req,res,next){
    console.log("The method is " + req.method )
    console.log("The url is "+ req.hostname)
    console.log("The route is "+ req.url)
    next()
}
app.use(logger)
app.get("/multiply",(req,res)=>{
    let a = parseInt(req.query.a)
    let b = parseInt(req.query.b)
    res.json({
        result: a*b
    })
})
app.get("/add/:a/:b",(req,res)=>{
    let a = parseInt(req.query.a)
    let b = parseInt(req.query.b)
    res.json({
        result: a+b
    })
})
app.get("/substract",(req,res)=>{
    let a = parseInt(req.query.a)
    let b = parseInt(req.query.b)
    res.json({
        result: a-b
    })
})
app.get("/divide",(req,res)=>{
    let a = parseInt(req.query.a)
    let b = parseInt(req.query.b)
    res.json({
        result: a/b
    })
})
app.listen(3000)