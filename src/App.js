import logo from "./logo.svg";
import "./App.css";

function App() {
  for (let i = 0; i < 10000; i++) {
    console.log(i);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          width={200}
          height={400}
        />
        <p>
          Edit <code>src/App.js</code> and save to reloadAAA.
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
    </div>
  );
}

export default App;
