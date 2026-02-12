const express = require("express")
const app = express()
let ID = 0
const todoList = []
app.post("/task/:tasks",function(req,res){
    const todo = req.params.tasks
    todoList.push({[ID]: todo}) 
    ID+=1
    res.json({
        todoList
    })
})
app.delete("/task/:deletetodo",function(req,res){
    const tododelete = req.params.deletetodo
    for (let i = 0; i < todoList.length; i++) {
    const obj = todoList[i];
    const key = Object.keys(obj)[0];  // "0", "1", ...
    if (key === String(tododelete)) {
       todoList.splice(i,1)
    }
  }
    res.json({todoList})
})

app.listen(3000)