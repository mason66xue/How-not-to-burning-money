import logo from './logo.svg';
import './App.css';
import { Doughnut } from 'react-chartjs-2';
import DonutChart from './components/DonutChart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <DonutChart />

      </div>
  );
}

export default App;
