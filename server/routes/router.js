const express=require('express');
const app=express();
const port=3000;
app.get('/Password',(req,res)=>{
    const Passwordcheck=require('../database/database_functions/Password');
    res.send(Passwordcheck(req.params.email,req.params.password));
});
app.get('/Order.Cus',(req,res)=>{
    const Order_Cus=require('../database/database_functions/Order_Cus');
    res.send(Order_Cus(req.params.email,req.params.password));
});
app.get('/Order.Sell',(req,res)=>{
    const Order_Sell=require('../database/database_functions/Order_Sell');
    res.send(Order_Sell(req.params.orgemail,req.params.password));
});
app.put('/Order',(req,res)=>{
    const Order_Add=require("../database/database_functions/Order_Add");
    res.send(Order_Add(req.params));
});

app.listen(port);