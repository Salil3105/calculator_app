import React, { useState } from 'react'
import './App.css';

function App() 
{

  const [result,setResult] = useState("");

  const handleClick = (e) => {
      setResult(result.concat(e.target.name));
  }

  const clear = () => {
      setResult("");
  }

  const backspace = () => {
      setResult(result.slice(0 , result.length - 1));
  }

  const calculate = () => {
    try {
        console.log('Inside Calculate Function');
        setResult(eval(result).toString());
      }
      catch(err) {
        setResult("Error");
      }
  }

  return (
    <>
      {/* <h1>🔥🔥🔥Hello and {result} JavaScript 🔥🔥🔥</h1> */}
      <div class="custom-shape-divider-bottom-1622489793">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" class="shape-fill"></path>
        </svg>
      </div>
      <div className="container">
          <form>
              <input type="text" value={result} />
          </form>
          <div className="keypad">
              <button className="highlight" onClick={handleClick} onClick={clear} id="clear" >Clear</button>
              <button className="highlight" onClick={handleClick} onClick={backspace} id="backspace">C</button>
              <button className="highlight"  name="/" onClick={handleClick}>&divide;</button>
              <button name="7" onClick={handleClick}>7</button>
              <button name="8" onClick={handleClick}>8</button>
              <button name="9" onClick={handleClick}>9</button>
              <button className="highlight"  name="*" onClick={handleClick}>&times;</button>
              <button name="4" onClick={handleClick}>4</button>
              <button name="5" onClick={handleClick}>5</button>
              <button name="6" onClick={handleClick}>6</button>
              <button className="highlight"  name="-" onClick={handleClick}>&ndash;</button>
              <button name="1" onClick={handleClick}>1</button>
              <button name="2" onClick={handleClick}>2</button>
              <button name="3" onClick={handleClick}>3</button>
              <button className="highlight"  name="+" onClick={handleClick}>+</button>
              <button name="0" onClick={handleClick}>0</button>
              <button name="." onClick={handleClick}>.</button>
              <button className="highlight" onClick={calculate} id="result">=</button>
          </div>
      </div>
    </>
  );
}

export default App;
