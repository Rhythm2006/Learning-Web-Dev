const axios = require("axios")
// axios v fetch
function main(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(async response =>{
        const json = await response.json()
        console.log(json.length)
    })
}

//////////////
async function main2(){
     const response = await fetch("https://jsonplaceholder.typicode.com/users")
     const json = await response.json()
     console.log(json)
}
//////////////
async function main3(){
     const response = await axios.get("https://jsonplaceholder.typicode.com/users")
     console.log(response.data)
}


//////////////////////////
async function main4(){
     const response = await axios.post("https://httpdump.app/dumps/ca77fd32-eb80-49ab-9837-fa7b7cd40d21",{
        username: "Rhythm",
        pasword: "1234567"
     },{
        headers: {
            Authorization: "Bearer 1243"
        }
     })
     console.log(response.data)
}
async function main5(){
    // request config
     const response = await axios.get("https://httpdump.app/dumps/ca77fd32-eb80-49ab-9837-fa7b7cd40d21?a=bcds",{
        headers: {
            Authorization: "Bearer 1243"
        }
     })
     console.log(response.data)
}

async function main6(){
    const response = await axios(
        {
            url: "https://httpdump.app/dumps/ca77fd32-eb80-49ab-9837-fa7b7cd40d21?a=bcds",
            method: "Post",
            headers: {
                Authorization: "Bearer 123"
            },
            data: {
                username: "Rhythm",
                password: "123456"
            }
        }
    )
}
main6()


