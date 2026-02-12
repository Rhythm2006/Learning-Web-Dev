const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const { UserModel, TodoModel } = require("./db");
const app = express();
const mongoose = require("mongoose");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "sapovnela2022"
mongoose.connect("mongodb+srv://rhythsanjeev2006_db_user:dFFjwX46YIbQpaik@cluster0.hvhmjgb.mongodb.net/todo-app-database")
app.use(express.json());
app.use(cors());

app.post("/signup", async function(req,res){
    const requiredBody = z.object({
        name: z.string().min(3).max(100),
        email: z.string().min(3).max(100).email(),
        password: z.string().min(8).max(30)
    })

    // const parseData = requiredBody.parse(req.body);
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        res.json({
            message: "Invalid format",
            error: parsedDataWithSuccess.error
        })
        return
    }


    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    try{
    const hashedPassword = await bcrypt.hash(password,5)
    console.log(hashedPassword)

    await UserModel.create({
        name: name,
        email: email,
        password: hashedPassword

    })
    
    res.json({
        message: "Youre logged in"
    })
    } catch(e){
        res.json({
            message: "Error while storing data in the DB"
        })
    }

    
});

app.post("/signin",async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email
    })
    if (!user){
        res.status(403).message({
            message: "User doesnt exist!"
        })
    }
    const passwordMatch= await bcrypt.compare(password,user.password);


    if(passwordMatch){
        const token = jwt.sign({
            userId: user._id.toString()
        },JWT_SECRET);
        res.json({
            message: `${token}`
        })
    } else{
        res.status(403).json({
            message:"Incorrect Credentials"
        })
    }
});

app.post("/todo",auth,async function(req,res){
    const userId = req.userId;
    const todo = req.body.todo
    await TodoModel.create({
        title: todo,
        done: false,
        userId: userId
    })
    res.json({
        msg: "Task entered successfully"
    })
});
app.get("/todos",auth,async function(req,res){
    const userId = req.userId;
    const todo = await TodoModel.find({
        userId: userId
    })
    res.json(todo)
});
function auth(req,res,next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token,JWT_SECRET);

    if(decodedData){
        req.userId = decodedData.userId
        next()
    } else{
        res.status(403).message({
            mssg: "Invalid Credentials"
        })
    }
}
app.listen(3000);



// "name": "Rhythm",
//     "email": "rhythprivatelimited@support.com",
//     "password": "12345678"

