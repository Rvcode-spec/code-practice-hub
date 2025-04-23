const express = require('express');
const cors = require('cors')
require("./DB/config");
const Admin =require("./DB/Admin")
const Data = require("./DB/Data")
const jwt = require("jsonwebtoken")

const jwtkey = 'OMS'

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

   try {
      if (!req.body.email || !req.body.password) {
        return resp
          .status(400)
          .json({ result: "Email and password are required" });
      }
     let admin = await Admin.findOne({
      email: req.body.email,
      password: req.body.password,
    }).select("-password");

    if (admin) {
      jwt.sign({ admin }, jwtkey, { expiresIn: '2h' }, (err, token) => {
        return resp.json({
          admin: admin,
          auth: token
        });
        // Send response and stop execution
      })
    } else {
      return resp.status(404).json({ result: "No User Found" });
    }
  } catch (error) {
    console.error(error);
    return resp.status(500).json({ error: "Internal Server Error" });
  }
});
    


server.post("/adddata", async (req , resp)=>{
  console.log("Received Data:", req.body);
  let Adddata = new Data(req.body);
  let result = await Adddata.save();
  resp.send(result);

})

server.get("/data", async (req, res) => {
  try {
    const adminId = req.query.adminId;
    if (!adminId) {
      return res.status(400).json({ message: "adminId is required" });
    }

    const data = await Data.find({ adminId });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});



server.delete('/data/:id', async (req, res) => {
  try {
    const result = await Data.deleteOne({ _id: req.params.id });
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: "Failed to delete data" });
  }
});



 server.listen(5000,()=>{
    console.log("Server Start");
    
 })
