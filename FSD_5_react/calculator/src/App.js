import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState(''); // Holds the current input value
  const [result, setResult] = useState(''); // Stores the final result

  // Function to handle button click
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Clear the input and result
  const handleClear = () => {
    setInput('');
    setResult('');
  };

  // Handle the evaluation of the expression
  const handleEqual = () => {
    try {
      setResult(eval(input).toString()); // Calculate and set the result (Use caution with eval in production apps)
    } catch (error) {
      setResult('Error'); // Display error if expression is invalid
    }
  };

  // Handle backspace to remove the last character
  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
          <div className="result">{result ? `= ${result}` : ''}</div>
        </div>
        <div className="keypad">
          {/* Row 1: AC, ., %, / */}
          <button onClick={handleClear} className="clear">AC</button>
          <button onClick={() => handleClick('.')}>&#183;</button>
          <button onClick={() => handleClick('%')}>%</button>
          <button onClick={() => handleClick('/')}>&divide;</button>

          {/* Row 2: 7, 8, 9, * */}
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>&times;</button>

          {/* Row 3: 4, 5, 6, - */}
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>&ndash;</button>

          {/* Row 4: 1, 2, 3, + */}
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>

          {/* Row 5: 0, =, Backspace */}
          <button onClick={() => handleClick('0')} className="zero">0</button>
          <button onClick={handleEqual} className="equal">=</button> {/* Moved here */}
          <button onClick={handleBackspace} className="backspace">⌫</button> {/* Moved here */}
        </div>
      </div>
    </div>
  );
}

export default App;
