const express = require("express");
require("./DB/config");
const User = require("./DB/user");
const cors = require("cors");
const AddProduct = require("./DB/Add-Product");

const jwt = require('jsonwebtoken');
const jwtkey = 'e-commerce';
const app = express(); // ✅ Correct way to initialize Express
app.use(express.json()); // ✅ Middleware to parse JSON
app.use(cors()); //

app.post("/SignUp", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
});

app.post("/Login", async (req, resp) => {
  try {
    if (!req.body.email || !req.body.password) {
      return resp
        .status(400)
        .json({ result: "Email and password are required" });
    }

    let user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    }).select("-password");

    if (user) {
      jwt.sign({ user }, jwtkey, { expiresIn: '2h' }, (err, token) => {
        return resp.json({
          user: user,
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

app.post('/Add-Product', async (req, resp) => {
  let product = new AddProduct(req.body);
  let result = await product.save();
  resp.send(result)
})

app.get('/products', async (req, resp) => {
  let products = await AddProduct.find();
  if (products.length > 0) {
    resp.send(products)
  } else {
    resp.send({ result: "No Product Found" })
  }
})

app.delete('/products/:id', async (req, resp) => {
  const result = await AddProduct.deleteOne({ _id: req.params.id });
  resp.send(result);
})

app.get('/products/:id', async (req, resp) => {
  let result = await AddProduct.findOne({ _id: req.params.id });
  if (result) {
    resp.send({ result });
  } else {
    resp.send({ result: "No Record Found" });
  }
}, []);

app.put('/products/:id', async (req, resp) => {
  let result = await AddProduct.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  resp.send(result);
});


app.get('/search/:key', verifyToken, async (req, resp) => {
  let result = await AddProduct.find({
    "$or": [
      { name: { $regex: req.params.key } },
      { company: { $regex: req.params.key } }
    ]
  });
  resp.send(result);
});

function verifyToken(req, resp, next){
  let token = req.headers['authorization'];

  // console.log("All set", token);
  if(token){
    token=token.split(' ')[1];
    jwt.verify(token, jwtkey,(err,valid)=>{
      if(err){
        resp.status(401).send({result: "Please Provide Valid Token"})
      }else{
        next();
      }
    })
  }else{
    resp.status(403).send({result:"Please add token with header"})
  
  }

}
app.listen(5000, () => {
  console.log("App Successfully Running on Port 3000");
});
