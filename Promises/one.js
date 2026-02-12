// promisified version of readfile
// const fs = require('fs')

// function readMyFile(fileName){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(fileName,'utf-8',function(err,data){
//             setTimeout(()=>{
//                 resolve(data)
//             },3000)
//         })
//     })
// }

// function callback(content){
//     console.log(content)
// }

// const p = readMyFile('Promises/a.txt')
// p.then(callback)

//Promise chaining


// function setTimeOutPromisisfied(time){
//     return new Promise((resolve)=>{
//         setTimeout(resolve,time)
//     })
// }
// setTimeOutPromisisfied(5000).then(()=>{
//     console.log("Hi there")
//     return setTimeOutPromisisfied(2000)
// }).then(()=>{
//     console.log("Hi there again mate")
// })








