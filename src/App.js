import logo from './logo.svg';
import './App.css';


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

        <div class='game-map'>
          <div className="board-row">
            0
          </div>
          <div className="board-row">
            1
          </div>
          <div className="board-row">
            2
          </div>
          <div className="board-row">
            3
          </div>
          <div className="board-row">
            4
          </div>
          <div className="board-row">
            5
          </div>
          <div className="board-row">
            6
          </div>
          <div className="board-row">
            7
          </div>
          <div className="board-row">
            8
          </div>
      </div>
      </header>

    </div>
    


  );
}

export default App;
