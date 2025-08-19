const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const pool = require("./config/db");


dotenv.config();
const server = express();
server.use(cors());
server.use(express.json());

server.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.send("✅ Database connected! Time: " + result.rows[0].now);
  } catch (err) {
    res.send("❌ Database error: " + err.message);
  }
});



const port = process.env.PORT;
server.listen(port, ()=>{
    console.log("Stock Server Start");
    
})