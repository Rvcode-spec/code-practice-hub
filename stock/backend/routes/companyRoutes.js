const express = require("express");
const router = express.Router();
const { getCompanies, addCompany } = require("../modules/companySchema");
const generateRandomData = require("../utils/generateRandomData");

// GET all companies
router.get("/companies", async (req, res) => {
  try {
    const companies = await getCompanies();
    res.json(companies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// POST new company
router.post("/companies", async (req, res) => {
  const {
    name,
    symbol,
    sector,
    current_price = 0,
    change = 0,
    change_percent = 0,
    week_high = 0,
    week_low = 0,
    volume = "0",
    market_cap = "0",
    pe = 0,
    historical_data // optional
  } = req.body;

  if (!name || !symbol || !sector) {
    return res.status(400).json({ message: "Name, symbol, and sector are required" });
  }

  try {
    const company = await addCompany({
      name,
      symbol,
      sector,
      current_price,
      change,
      change_percent,
      week_high,
      week_low,
      volume,
      market_cap,
      pe,
      historical_data: historical_data?.length ? historical_data : generateRandomData(30, current_price, 50) // 👈 agar data nahi bheja to generate kar do
    });

    res.status(201).json(company);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
