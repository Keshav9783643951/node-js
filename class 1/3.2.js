const jwt=require("jsonwebtoken")

const value={
    name:"keshav",
    accno:123456
}
const token=jwt.sign(value,"lk")
console.log(token)