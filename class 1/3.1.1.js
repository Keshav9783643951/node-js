/*const express=require("express")
const app=express()
app.use(express.json())
app.get("/",function(req,res)
{
    const kidno=req.body.kidno;
    const kidl=kidno.length;
    res.send(kidl)
})
app.listen(3000)*/

const zod=require("zod")
function val(arr)
{
    const schema=zod.array(zod.number())

    const response=schema.safeParse(arr)
    console.log(response);
}
val(["s",2,3]);
