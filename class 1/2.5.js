const express = require('express')
const app = express()
const port = 3000
const user=[{
    name:"keshav",
    kidney:[{
        healthy:false,
        healthy:true
    }]
}]
app.use(express.json());
app.get('/', function(req, res)
{
    const keshavkidney=user[0].kidney;
    const noofh=0;
    const tot=keshavkidney.length;
    for(let i=0;i<keshavkidney.length;i++)
    {
        if(keshavkidney[i].kidney==true)
        {
            noofh++;
        }
    }
    const noofuh=keshavkidney.length-noofh;
    res.json({
        tot,
        noofh,
        noofuh
    })
} )
app.post("/",function(req,res)
{
    const ishea=req.body.ishea;
    user[0].kidney.push[{
        healthy:ishea
    }]
    res.json({
        msg:"done"
    })
})
app.listen(3000);