import logo from './logo.svg';
import './App.css';
import Poker from "./components/poker"
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
          <Poker />
          Hello Garrett and Friends
        </a>
      </header>
    </div>
  );
}

export default App;
