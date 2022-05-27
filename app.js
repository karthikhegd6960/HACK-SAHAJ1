const express=require("express");
const bodyparser=require("body-parser");
const app=express();
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
require('./db/connect.js');

const { client , driver}=require('./models/db.js');
app.get("/driver",function(req,res){
  res.send("driver login");
});
app.get("/client",function(req,res){
  res.send("client login");
});
app.get("/",function(req,res){
  res.render("index");
});

app.listen(3000,function(){
  console.log("server up an drunning on port 3000");
});
