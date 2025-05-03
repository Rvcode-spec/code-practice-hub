import generateContent from "@/configs/AiModel";
import streamContent from "@/configs/AiModel";
// import response from "@/configs/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    console.log("Received prompt:", prompt);

    const result = await generateContent.sendMessage(prompt)
    console.log(chunk.text)
    return NextResponse.json({'result': JSON.parse(chunk.text)})
    

    // const chatSession = await model.startChat();
  }catch(e){
    return NextResponse.json({'Error:': e})
  }
}
