import JobTiles from "./JobTiles";
import "./styles/App.css";

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <p>Portfolio</p>
        </header>
        <div className="app-content">
          <JobTiles />
        </div>
      </div>
    </div>
  );
}

export default App;
