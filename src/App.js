import logo from "./logo.svg";
import "./App.css";

import FitnessForm from "./components/FitnessForm";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FitnessForm />
      </header>
    </div>
  );
}

export default App;
