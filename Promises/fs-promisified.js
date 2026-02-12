const fs = require("fs").promises // Theres difference between require("fs").promises and require("fs"), because one gives a callback bassed fs and another one gives a promise api based fs

// function readMyFile(time){
//     setTimeout(()=>{
//         fs.readFile("a.txt","utf-8",function(err,data){
//             console.log(data)
//         })
//     },time)
// }

// async function solve() {
//     readMyFile(3000)
// }
// solve()

function delay(time){
    return new Promise((res)=>{
        setTimeout(res,time)
    })
}

async function readMyFile(time){
    await delay(time)
    const data = await fs.readFile("a.txt","utf-8")
    console.log(data)
    
}

async function solve(time){
    await readMyFile(time)
}

solve(3000)
console.log("Yup")