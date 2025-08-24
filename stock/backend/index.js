const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const { createCompanyTable } = require('./modules/companySchema');

const server = express();

// ✅ Proper CORS config
const corsOptions = {
  origin: [
    "https://stockvisionin.netlify.app", // frontend (production)
    "http://localhost:3000"              // frontend (development)
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // allow cookies/auth headers
};

// ✅ Apply CORS
server.use(cors(corsOptions));
server.options("/", cors(corsOptions)); // handle preflight requests

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
