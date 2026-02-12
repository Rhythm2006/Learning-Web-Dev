const fs = require("fs")
const { program } = require("commander")

// program
//     .option("--countwords","counts all the words, in the doc")
//     .parse()
// const opts = program.opts()
// async function main() {
//     const data = await fs.readFile("a.txt","utf-8")
//     return data 
// }

// if (opts.countwords) {
//     main().then((result) => {
//     console.log(`Total no of words are ${result.split(" ").length}`)
// })
// }
// process.argv => something you should remember

// const opts = program.opts()
// if (opts.countwords) {
//     console.log(data.split(" "))
// }

program
    .command("count")
    .description("The number of words to count")
    .argument("<file>","file to count")
    .action((file)=>{
        fs.readFile(file,"utf-8",(err,data)=>{
            if (err) {
                console.log(err)
            } else {
            console.log(`Total words in the file are ${data.split(" ").length}`)
        }
        })
    })
program.parse()

