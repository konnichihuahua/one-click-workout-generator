import logo from "./logo.svg";
import "./App.css";
import FitnessForm from "./components/FitnessForm";
import Results from "./components/Results";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState([]);
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_URL,
  });
  delete configuration.baseOptions.headers["User-Agent"];

  const openai = new OpenAIApi(configuration);
  const sendToGPT = (data) => {
    openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `
            Can you make a 1 week training program using these specifications? 
            • My goal is${data.fitnessGoals}
            • My fitness level is ${data.fitnessLevel}. 
            • Make it ${data.workoutDuration}
            • Using only these ${data.workoutEquipment}
            • My specific preference is ${data.specificPreferences}
            • ${data.workoutDays} workout days per week

            Make the response in .json format separated by days of workout.`,
          },
        ],
      })
      .then((result) => {
        console.log(result.data.choices[0].message.content);
        const gptResponse = result.data.choices[0].message.content;
        setResults(gptResponse);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {showResults ? (
          <Results results={results} />
        ) : (
          <FitnessForm
            setShowResults={setShowResults}
            results={results}
            sendToGPT={sendToGPT}
          />
        )}
      </header>
    </div>
  );
}

export default App;
