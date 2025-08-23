const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const { createCompanyTable } = require('./modules/companySchema');

const server = express();

// ✅ CORS Config
server.use(cors({
  origin: ["https://stockvisionin.netlify.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

server.use(express.json());

// Create table
createCompanyTable();

// Routes
const companyRoutes = require("./routes/companyRoutes");
server.use("/api", companyRoutes);

const port = process.env.PORT || 5050;
server.listen(port, () => {
  console.log(`✅ Stock Server running on port ${port}`);
});
