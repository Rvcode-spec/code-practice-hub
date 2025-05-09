// app/api/user/route.js
import generateContent from "@/configs/AiModel";
import { NextResponse } from "next/server";
 // make sure this path is correct

export async function POST(req) {
  try {
    const body = await req.json();
    const { prompt } = body;
    console.log("Received prompt:", prompt);

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const result = await generateContent(prompt);
    console.log(result);
    
    return NextResponse.json({ result });
  } catch (err) {
    console.error("❌ API Error:", err.message || err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
