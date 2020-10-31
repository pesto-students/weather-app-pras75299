import logo from './logo.svg';
import './App.css';
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <header className="header">Weather App</header>
      <main>
       <Forecast />
      </main>
    </div>
  );
}

export default App;
