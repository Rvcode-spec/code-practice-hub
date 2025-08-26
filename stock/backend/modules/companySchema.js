const pool = require("../config/db");

// Create companies table
const createCompanyTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS companies (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      symbol VARCHAR(20) UNIQUE NOT NULL,
      sector VARCHAR(50) NOT NULL,
      current_price NUMERIC(10,2) DEFAULT 0,
      change NUMERIC(10,2) DEFAULT 0,
      change_percent NUMERIC(5,2) DEFAULT 0,
      week_high NUMERIC(10,2) DEFAULT 0,
      week_low NUMERIC(10,2) DEFAULT 0,
      volume VARCHAR(20) DEFAULT '0',
      market_cap VARCHAR(20) DEFAULT '0',
      pe NUMERIC(10,2) DEFAULT 0,
      historical_data JSONB DEFAULT '[]'
    )
  `;
  try {
    await pool.query(query);
    console.log("✅ Companies table ready");
  } catch (err) {
    console.error("❌ Error creating companies table:", err);
  }
};

// Insert a new company with calculations
const addCompany = async ({
  name,
  symbol,
  sector,
  current_price = 0,
  previous_close = 0, // 👈 required for change %
  week_high = 0,
  week_low = 0,
  volume = "0",
  market_cap = "0",
  pe = 0,
  historical_data = []
}) => {
  // ✅ Calculation here
  const change = previous_close ? (current_price - previous_close) : 0;
  const change_percent = previous_close
    ? ((change / previous_close) * 100).toFixed(2)
    : 0;

  const query = `
    INSERT INTO companies (
      name, symbol, sector,
      current_price, change, change_percent,
      week_high, week_low, volume, market_cap, pe, historical_data
    )
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
    RETURNING *
  `;
  const values = [
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
    JSON.stringify(historical_data) // store as JSONB
  ];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error("Error inserting company:", err);
    throw err;
  }
};

// Get all companies
const getCompanies = async () => {
  try {
    const result = await pool.query("SELECT * FROM companies ORDER BY id");
    return result.rows;
  } catch (err) {
    console.error(" Error fetching companies:", err);
    throw err;
  }
};

const deleteAllCompanies = async () => {
  try {
    await pool.query("DELETE FROM companies");
    await pool.query("ALTER SEQUENCE companies_id_seq RESTART WITH 1");
    console.log("✅ All companies deleted and sequence reset");
  } catch (err) {
    console.error("❌ Error deleting companies:", err);
    throw err;
  }
};

module.exports = {
  createCompanyTable,
  addCompany,
  getCompanies,
  deleteAllCompanies
};
