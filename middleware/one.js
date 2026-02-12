const express = require("express")
const app = express()
function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age
    if (age>=14){
        next()
    } else {
        res.status(411).json({
            msg: "You need to be greater than age 14"
        })
    }
}
function isOldEnough(age){
    if (age>=14) {
        return true
    } else {
        return false
    }
}
app.get("/ride1",(req,res)=>{
    if (isOldEnough(req.query.age)){
        res.json({
            msg: "Successful"
        })
    } else{
        res.status(411).json({
            msg: "Age needs to be greater than 14"
        })
    }
})
app.get("/ride2",isOldEnoughMiddleware,(req,res)=>{
    res.json({
        msg:"Successful"
    })
})
app.listen(3000)

// if we want the middleware to work for every get method, we can also use app.use(middleware) instead of defining in each get method
app.use(isOldEnoughMiddleware)
app.get("/ride3",(req,res)=>{
    res.json({
        msg: "Sucessful"
    })
})
app.get("/ride4",(req,res)=>{
    res.json({
        msg: "Sucessful"
    })
})