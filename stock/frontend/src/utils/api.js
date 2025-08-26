import axios from "axios";

export const API_BASE = "https://stockvision-backend.onrender.com/api";

// ✅ Get all companies
export const fetchCompanies = async () => {
  try {
    const res = await axios.get(`${API_BASE}/companies`);
    console.log("Companies API Response:", res.data);
    return res.data;
  } catch (err) {
    console.error("Error fetching companies:", err);
    return [];
  }
};

