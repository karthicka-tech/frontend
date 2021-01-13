var exp=require("express");
var bp=require('body-parser');
var cors=require('cors');

var app=exp();

app.use(cors());
app.use(bp.json());
let userDataRoutes=require('./routes');

app.use('/',userDataRoutes);



app.listen(5000,()=>{
    console.log("app running");
})
module.exports = app;