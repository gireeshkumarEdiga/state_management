import logo from './logo.svg';
import './App.css';
import {Grocery} from './components/Grocery';

function App() {
  return (
    <div className="App">
      <center>
        <h1 style={{color:"blue"}}>Grocery List</h1>
        <Grocery />
      </center>
    </div>
  );
}

export default App;
