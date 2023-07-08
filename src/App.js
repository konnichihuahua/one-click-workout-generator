import logo from "./logo.svg";
import "./App.css";
import FitnessForm from "./components/FitnessForm";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  console.log(process.env.REACT_APP_API_URL);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({});
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {showResults ? (
          <Results formData={formData} />
        ) : (
          <FitnessForm
            setShowResults={setShowResults}
            setFormData={setFormData}
          />
        )}
      </header>
    </div>
  );
}

export default App;
