import './App.css';

function App() {

  const items = [
    "1", "2", "3"
  ];

  return (
    <div className="App">
      Hi!
      <button
        onClick={() => console.log('click')}
      >
        Click meh
      </button>
      <div>
        {items.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
