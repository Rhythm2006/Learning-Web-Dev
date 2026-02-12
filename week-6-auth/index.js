const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()
const JWT_SECRET = "Sapovnela"
app.use(express.json())
const users = []
function auth(req,res,next){
    const token = req.headers.token
    if (token){
    jwt.verify(token,JWT_SECRET,(err,decoded)=>{
        if (err) {
            res.json({
                message:"Unauthorized"
            })
        } else{
            req.user = decoded
            next()
        }
    })} else{
        res.json({
                message:"Unauthorized"
            })
    }
    
}

function logger(req,res,next){
    console.log(req.method + " request came")
    next()
}

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})
app.post("/signup",(req,res)=>{
    const username = req.body.username
    const password = req.body.password

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You are signed in"
    })
})

app.post("/signin",(req,res)=>{
    const username = req.body.username
    const password = req.body.password

    

    users.find((u)=>{
        if (u.username===username && u.password === password){
            const token = jwt.sign({
                username: username
            },JWT_SECRET)
            u.token = token
            res.json({
                token: token
            })
        } 
        
        
    })

    res.status(403).send({
            message: "Username/password incorrect, try again!"
        })
    
})

app.get("/me",logger,auth,(req,res)=>{
    const user = req.user
    res.send({
        user: user.username
    })
})





app.listen(3000)