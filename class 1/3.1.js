const express=require("express")
const zod=require("zod")
const app=express()
const schema=zod.array(zod.number())
app.use(express.json())
app.post("/",function(req,res)
{
    const kidno=req.body.kidno;
    const response=schema.safeParse(kidno)
    //const kidl=kidno.length;
    res.send(response)
})
app.listen(3000)