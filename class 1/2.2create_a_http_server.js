const express=require("express");
function calclatesum(n){
    let ans=0;
    for(let i=1;i<=ans;i++)
    {
        ans=ans+i;
    }
    return ans;
}
const app=express();
app.get("/",function(req,res)
{
    const n=req.query.n;
    const ans=calclatesum(n);
    res.send(ans)
})
app.listen(3000);




// for install express command will be npm install express