const express=require("express");
const bodyparser=require("body-parser");
const app=express();
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
require('./db/connect.js');

const { client , driver}=require('./models/db.js');
app.get("/driver",function(req,res){
  res.render("driver");
});
app.get("/clientlogin",function(req,res){
    res.send("client log in");
  });
app.get("/driverlogin",function(req,res){
    res.send("client log in");
  });
app.get("/client",function(req,res){
  res.render("client");
});
app.get("/",function(req,res){
  res.render("index");
});
app.post("/client",async(req,res)=>{
    try{
        
    ClientSchema=new client({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        
        password:req.body.password,
        confirmpassword:req.body.confirmpassword,
        phoneno:req.body.phoneno
        

    })
    const cl=await ClientSchema.save();
}
    catch(err){
        res.status(400).send(err);
        console.log(err)
    }

    res.redirect('client');



});
app.post("/driver",async(req,res)=>{
    try{
        
    DriverSchema=new driver({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        
        
        password:req.body.password,
        confirmpassword:req.body.confirmpassword,
        phoneno:req.body.phoneno,
        
        city:req.body.city,
        
        pincode:req.body.pincode,
        
        license_no:req.body.license_no,
        
        insurance_policy_no:req.body.insurance_policy_no,
        license_photo:req.body.license_photo,
        
        
        type_of_truck:req.body.type_of_truck,
        truck_photo:req.body.truck_photo,
        
        
        

    })
    const dr=await DriverSchema.save();
}
    catch(err){
        res.status(400).send(err);
        console.log(err)
    }

    res.redirect('driver');



});
app.post('/clientlogin',async(req,res)=>{
    try{
        phoneno=req.body.login_phoneno;
        const password=req.body.login_password;

       user=await client.findOne({phoneno:phoneno});
       if(password==user.password){
           res.status(201).send('aboutus');
       }else{
           res.send("invalid login details");
       }



    }catch(err){
        res.status(400).send("invalid email");
    }
})

app.post('/driverlogin',async(req,res)=>{
    try{
        phoneno=req.body.login_phoneno;
        const password=req.body.login_password;

       user=await driver.findOne({phoneno:phoneno});
       if(password==user.password){
           res.status(201).send('dri');
       }else{
           res.send("invalid login details");
       }



    }catch(err){
        res.status(400).send("invalid phoneno");
    }
})


app.listen(3000,function(){
  console.log("server up an drunning on port 3000");
});
