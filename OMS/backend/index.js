const express = require('express');
const cors = require('cors')
require("./DB/config");
const Admin =require("./DB/Admin")
const Data = require("./DB/Data")


 const server = express();
 server.use(express.json());
 server.use(cors());

 server.post("/signup", async (req, resp) => {
    console.log("👉 Received at backend:", req.body);  // Add this line
    let admin = new Admin(req.body);
    let result = await admin.save();
    result = result.toObject(); // Optional step
    resp.send(result); // Send full response
  });


  server.post("/login", async(req, resp)=>{
      let admin = await Admin.findOne({
         email:req.body.email,
         password:req.body.password
      })

      if(admin){
         resp.send(admin)
      }else{
         resp.send({result: "No user found"})
      }

  })

  

 server.listen(5000,()=>{
    console.log("Server Start");
    
 })
