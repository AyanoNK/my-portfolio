import JobTile from "./JobTile";
import "./styles/App.css";

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <p>Portfolio</p>
        </header>
        <div className="app-content">
          <JobTile />
          <JobTile />
          <JobTile />
        </div>
      </div>
    </div>
  );
}

export default App;
