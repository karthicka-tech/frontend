var express=require('express');
var router=express.Router();
var jsonwebtoken=require('jsonwebtoken');
var ObjectID = require('mongodb').ObjectID;
var myconnection=require("mongodb").MongoClient;
myconnection.connect("mongodb://localhost:27017",(err,conn)=>{
  // first time create db,collection and insert a record.Only then db is created
dbnm=conn.db("resources");
});



router.put('/usersdata/:id',(req,res)=>{

  var editid=req.params.id;
  console.log(editid);
  var query={"_id":ObjectID(editid)};
  var newval ={"$set":{"fname":req.body.fname,"lname":req.body.lname}};
  var options= { upsert: true, strict: false }
  try{
 dbnm.collection("assets").update(query,newval,options,(err,result)=>{
    if(result){
       console.log(editid);
      console.log(newval);
       console.log(query);
      res.send({"status":"updatesuccess",result})
    }
  });
}
catch(e)
{
  res.send(e);
}

})



router.post("/login",(req,res)=>{
  let token=jsonwebtoken.sign({"logindata":req.body},'secretkey',{
     expiresIn: '1d'
  });
    console.log(req.body);
    var userdata={
        username: req.body.username,
         password: req.body.password
        
    }
 console.log(userdata);
 try{
    dbnm.collection("registration").insertOne(userdata,(err,response)=>{
        console.log("created");
        if(response){
          console.log("response");
            res.send({"status":"Authenticated",
                userdata,
                token}); 

        }
    });
  }
  catch(e)
{
  res.send(e);
}
   });


router.post("/adddata",(req,res)=>{
 
 
    console.log(req.body);
    var userdata={
        fname: req.body.fname,
         lname: req.body.lname
        
    }
 console.log(userdata);
 try{
  dbnm.collection("assets").insertOne(userdata,(err,response)=>{
      
        if(response){
     
            res.send({"status":"Added newUserdata",
               response
                }); 

        }
    });

}
catch(e)
{
  res.send(e);
}


   });


router.get("/getusers",(req,res)=>{
    console.log("getdata");
    dbnm.collection("assets").find({}).toArray((err,response)=>{
        console.log(response); 
         res.send({"msg":"success","data":response});
       
    })
    
  
})

module.exports=router;

   
