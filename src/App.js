import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(0);
  function addcount(){
    setCount(count+1);
    console.log(useState);
  }
  function subcount(){
    setCount(count-1);
    console.log(count);
  }
  return (
    <>
    
    <div className="App">
      <div className="box">
      <p className='countnum'>{count}</p>
      <button onClick={addcount} className="addButton">ADD</button>
      <button onClick={subcount} className='sub'>SUB</button>
      </div>
    </div>
    
    </>
    
  );
}

export default App;
