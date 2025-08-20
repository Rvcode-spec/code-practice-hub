
import axios from "axios";

export const API_BASE = "http://localhost:5050/api";

export const fetchCompanies = async () => {
  try {
    const res = await axios.get(`${API_BASE}/companies`);
    console.log("Companies API Response:", res.data);
    return res.data; // direct array
  } catch (err) {
    console.error("Error fetching companies:", err);
    return [];
  }
};


