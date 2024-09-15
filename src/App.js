import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className='yellow'>Привет, {props.name}!</h2>
      </header>
    </div>
  );
}

export default App;
