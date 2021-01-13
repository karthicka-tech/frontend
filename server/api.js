var exp=require("express");
var bp=require('body-parser');
var cors=require('cors');
var jsonwebtoken=require('jsonwebtoken');
var app=exp();
app.use(cors());
app.use(bp.json());


var myconnection=require("mongodb").MongoClient;
myconnection.connect("mongodb://localhost:27017",(err,conn)=>{
  // first time create db,collection and insert a record.Only then db is created
dbnm=conn.db("resources");
/*var obj={ "fname":"Akash",
    "lname":"kuleb",
    "registrationdate":new Date('2018-01-11T15:32:28Z')};
dbnm.collection("usersProfile").insertOne(obj,(err,succ)=>{
if(err) throw err;
  console.log("Resources created");
})*/

});


app.post("/usersdata",(req,res)=>{
  let token=jsonwebtoken.sign({"userdata":req.body},'secretkey',{
     expiresIn: '1d'
  });
    console.log(req.body);
    var userdata={
        title: req.body.title,
         body: req.body.body
        
    }
 console.log(userdata);
    dbnm.collection("usersProfile").insertOne(userdata,(err,succ)=>{
        console.log("created");
        if(succ){
          console.log("succ");
            res.send({"msg":"success",
                userdata,
                token}); 

        }
    });
   });
app.get("/getcustomers",(req,res)=>{
    console.log("getdata");
    dbnm.collection("usersProfile").find({}).toArray((err,succ)=>{
        console.log(succ); 
         res.send({"msg":"get success","data":succ});
    })
    
  
})


   

app.listen(5000,()=>{
    console.log("app running");
})