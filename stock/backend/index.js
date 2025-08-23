const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const { createCompanyTable } = require('./modules/companySchema');

const server = express();
server.use(cors());
server.use(express.json());

// Create table
createCompanyTable();

// Routes
const companyRoutes = require("./routes/companyRoutes");
server.use("/api", companyRoutes);

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`✅ Stock Server running on port ${port}`);
});
