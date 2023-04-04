const express=require('express');
const app=express();
const port=3000;
app.get('/Password',(req,res)=>{
    const Passwordcheck=require('../database/database_functions/Password');
    res.send(Passwordcheck(req.params.email,req.params.password));
});
app.get('/Order.Cus',(req,res)=>{

});
app.get('/Order.Sell',(req,res)=>{

});
app.put('/Cus',(req,res)=>{

});

app.listen(port);