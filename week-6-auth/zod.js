const jwt = require("jsonwebtoken")
const zod = require("zod")
const secret = "sapovnela"

const emailSchema = zod.string().email()
const passwordSchema = zod.string().min(6)
function signinjwt(username,password){
    const usernameResponse = emailSchema.safeParse(username)
    const passwordResponse = passwordSchema.safeParse(password)

    if(!usernameResponse.success || !passwordResponse.success){
        return null
    }
    const signature = jwt.sign({
        username: username
    },secret)
    return signature
}

const ans = signinjwt("rhythm@gmail.com","blahblahvlah")
console.log(ans)