// lib/googleai.js
import { GoogleGenAI } from "@google/genai";

const model = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
});

export { model };
