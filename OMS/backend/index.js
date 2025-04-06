const express = require('express');
const cors = require('cors')
require("./DB/config");
const Admin =require("./DB/Admin")
const Data = require("./DB/Data")


 const server = express();
 server.use(express());
 server.use(cors());

 server.post("/signup", async(req,resp)=>{
    console.log(req.body);
    
    let admin = new Admin(req.body);
    let result = await admin.save();
    result = result.toObject();
    resp.send(result);
 })

 server.listen(5000,()=>{
    console.log("Server Start");
    
 })
