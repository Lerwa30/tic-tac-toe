import './App.css';
import Square from './Square';

function App() {
  const myName = 'Leroy';
  return (
    <div className="App">
      <Square propVar={myName}/>
    </div>
  );
}

export default App;
