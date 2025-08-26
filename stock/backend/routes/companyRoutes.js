const express = require("express");
const router = express.Router();
const { getCompanies, addCompany , deleteAllCompanies } = require("../modules/companySchema");
const generateRandomData = require("../utils/generateRandomData");
const pool = require("../config/db"); 

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

router.delete("/delete", async (req, resp) => {
  try {
    await deleteAllCompanies();
    resp.json({ message: "All companies deleted successfully" });
  } catch (err) {
    console.error("❌ Error deleting companies:", err.message);
    resp.status(500).json({ message: "Server error", error: err.message });
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
     historical_data: historical_data?.length ? historical_data : generateRandomData(365, current_price, 50)
    });

    res.status(201).json(company);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});






module.exports = router;
