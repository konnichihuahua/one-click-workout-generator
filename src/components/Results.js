import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

function Results({ formData }) {
  const [results, setResults] = useState("");
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_URL,
  });
  delete configuration.baseOptions.headers["User-Agent"];

  const openai = new OpenAIApi(configuration);
  const sendToGPT = () => {
    openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `
            Can you make a 1 week training program using these specifications? 
            • My goal is${formData.fitnessGoals}
            • My fitness level is ${formData.fitnessLevel}. 
            • Make it ${formData.workoutDuration}
            • Using only these ${formData.workoutEquipment}
            • My specific preference is ${formData.specificPreferences}
            
            Make it a table format`,
          },
        ],
      })
      .then((result) => setResults(result.data.choices[0].message.content));
  };

  return (
    <div className="p-10 flex self-center justify-center flex-col">
      Fitness Goal: {formData.fitnessGoals} <br></br>
      Fitness Level: {formData.fitnessLevel} <br></br>
      {results}
      <button onClick={() => sendToGPT()}> Click me</button>
    </div>
  );
}

export default Results;
