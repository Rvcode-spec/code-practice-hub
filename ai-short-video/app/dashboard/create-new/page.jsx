"use client";

import React, { useState } from "react";
import SelectTopic from "./_components/SelectTopic";
import SelectStyle from "./_components/SelectStyle";
import SelectDuration from "./_components/SelectDuration";
import { Button } from "@/components/ui/button";
import axios from "axios";
import CustomLoading from "./_components/CustomLoading";

export default function CreateNew() {
  const [formData, setFormData] = useState({
    topic: '',
    imageStyle: '',
    duration: ''
  });

  const [loading, setLoading] = useState(false);
  const [videoScript, setVideoScript] = useState(null);

  const onHandleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue);
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  const GetVideoScript = async () => {
    const { duration, topic, imageStyle } = formData;
    // Validate fields
    if (!duration || !topic || !imageStyle) {
      alert("Please select topic, style, and duration before generating the video.");
      return;
    }

    setLoading(true);
    const prompt = `Write a script to generate ${duration} seconds video on topic: ${topic} along with AI image prompt in ${imageStyle} format for each scene and give me result in JSON format with imagePrompt and ContentText as field`;
    console.log("Prompt:", prompt);
    const result= await axios.post('/api/user',{
      prompt:prompt
    }).then(resp=>{
      console.log(resp.data);
      
    })
    
    setLoading(false);
  };

  const onCreateClickHandler = () => {
    GetVideoScript();
  };

  return (
    <div className="md:px-20">
      <h2 className="font-bold text-4xl text-primary text-center">Create New</h2>

      <div className="mt-10 shadow-md p-10">
        <SelectTopic onUserSelect={onHandleInputChange} />
        <SelectStyle onUserSelect={onHandleInputChange} />
        <SelectDuration onUserSelect={onHandleInputChange} />

        <Button className="mt-10 w-full" onClick={onCreateClickHandler}>
          Create Short Video
        </Button>
      </div>

      <CustomLoading loading={loading} />

      {/* Optional: Display the result */}
      {videoScript && (
        <div className="mt-10 p-5 border rounded bg-gray-100">
          <h3 className="font-semibold mb-2">Generated Script:</h3>
          <pre className="whitespace-pre-wrap">{JSON.stringify(videoScript, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
