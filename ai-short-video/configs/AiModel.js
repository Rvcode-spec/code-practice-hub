// utils/generateContent.js
import { GoogleGenAI } from "@google/genai";

const model = "gemini-1.5-pro-latest";
const config = { responseMimeType: "application/json" };

export default async function generateContent(prompt) {
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
  });

  const contents = [
    {
      role: "user",
      parts: [{ text: prompt }],
    },
  ];

  try {
    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });

    let fullText = "";
    for await (const chunk of response) {
      fullText += chunk.text || "";
    }

    return fullText;
  } catch (err) {
    console.error("❌ Error in generateContent:", err.message || err);
    throw err;
  }
}
