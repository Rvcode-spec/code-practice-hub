const express = require('express');
require('./DB/config');
const cors = require('cors');
const User = require('./DB/user');
const port = 5000;

const app = express();
app.use(express.json()) // Middleware to parse JSON
app.use(cors())

app.post("/SignUp", async (req,resp)=>{
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    resp.send(result);
})


app.post("/Login", async (req, resp) => {
    try {
        console.log("Login Request", req.body);
        
        let user = await User.findOne({
            email: req.body.email,
            password: req.body.password
        });
        if (!user) {
            return resp.status(404).json({ message: "User not found" });
        }
        resp.json({ 
            user: { name: user.name} 
        });
    } catch (error) {
        resp.status(500).json({ message: "Internal server error", error });
    }
});



app.listen(port, ()=>{
    console.log("App Successfully Runing Port 5000");
    
})