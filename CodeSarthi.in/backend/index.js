const express = require("express");
const cors = require("cors");
require("./DB/config");
const User = require("./DB/user");
const server = express();
const jwt = require("jsonwebtoken");

// jwt key
const jwtkey = "Codesarthi";

server.use(cors());
server.use(express.json());

server.post("/register", async (req, resp) => {
  console.log("👉 Received at backend:", req.body);

  try {
    const user = new User(req.body);
    const result = await user.save();

    // Remove sensitive data from the result
    const userWithoutPassword = {
      id: result._id,
      name: result.name,
      email: result.email,
    };

    // Generate token
    const token = jwt.sign({ id: result._id }, "your_secret_key", {
      expiresIn: "1h",
    });

    // Send response with token
    resp.status(201).send({
      ...userWithoutPassword,
      token,
    });
  } catch (error) {
    // console.error("❌ Registration error:", error);
    resp.status(500).send({ error: "Registration failed" });
  }
});

server.post("/login", async (req, resp) => {
  console.log(req.body);

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
      jwt.sign({ user }, jwtkey, { expiresIn: "2h" }, (err, token) => {
        return resp.json({
          user: user,
          auth: token,
        });
        // Send response and stop execution
      });
    } else {
      return resp.status(404).json({ result: "No User Found" });
    }
  } catch (error) {
    console.error(error);
    return resp.status(500).json({ error: "Internal Server Error" });
  }
});

server.listen(9000, () => {
  console.log("server start");
});
