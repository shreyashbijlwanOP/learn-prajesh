import { useState } from 'react';
import './App.css';

function App() {
  
  let [state,setState] = useState(0)
  
  console.log("Rendering")
  return (
    <div className="App">
      <h1>this is App </h1>
      <button onClick={()=>{setState(state+1)}} >Increase State</button>
    </div>
  );
}

export default App;
