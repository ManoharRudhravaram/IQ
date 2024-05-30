// import React, { useState } from 'react'

// function Calculator() {
//   let [currentValue,setCurrentValue]=useState(0)
//   return (
//     <div>
//       <div className="main border w-80 h-96 m-auto mt-10 flex flex-col items-center justify-center bg-red-300">
//         <input type="number" className="border border-black p-2" />
//         <div className="r-1 flex items-center justify-evenly  w-52 mt-5">
//           <button className="bg-blue-300 p-3 rounded-full h-10 w-10 text-center ">9</button>
//           <button className="bg-blue-300 p-3 rounded-full h-10 w-10 text-center ">8</button>
//           <button className="bg-blue-300 p-3 rounded-full h-10 w-10 text-center ">7</button>
//           <button className="bg-blue-300 p-3 rounded-full h-10 w-10 text-center ">+</button>
//         </div>
//         <div className="r-1 flex items-center justify-evenly w-52 mt-5">
//           <button className="bg-blue-300 p-3 rounded-full h-10 w-10 text-center ">6</button>
//           <button className="bg-blue-300 p-3 rounded-full h-10 w-10 text-center ">5</button>
//           <button className="bg-blue-300 p-3 rounded-full h-10 w-10 text-center ">4</button>
//           <button className="bg-blue-300 p-3 rounded-full h-10 w-10 text-center ">-</button>
//         </div> <div className="r-1 flex items-center justify-evenly w-52 mt-5">
//           <button className="bg-blue-300 p-3 rounded-full h-10 w-10 text-center ">3</button>
//           <button className="bg-blue-300 p-3 rounded-full h-10 w-10 text-center ">2</button>
//           <button className="bg-blue-300 p-3 rounded-full h-10 w-10 text-center ">1</button>
//           <button className="bg-blue-300 p-3 rounded-full h-10 w-10 text-center ">*</button>
//         </div> <div className="r-1 flex items-center justify-evenly w-52 mt-5">
//           <button className="bg-blue-300 p-3 rounded-full h-10 w-10 text-center ">0</button>
//           <button className="bg-blue-300 p-3 rounded-full h-10 w-10 text-center ">/</button>
//           <button className="bg-blue-300 p-3 rounded-full h-10 w-10 text-center ">C</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Calculator

import React, { useState } from 'react';

function Calculator() {
  const [currentValue, setCurrentValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  // Function to handle number button clicks
  const handleNumberClick = (number) => {
    if (currentValue === '0' || operator) {
      setCurrentValue(number.toString());
      setOperator(null);
    } else {
      setCurrentValue(currentValue + number.toString());
    }
  };

  // Function to handle operator button clicks
  const handleOperatorClick = (op) => {
    setPreviousValue(currentValue);
    setCurrentValue('0');
    setOperator(op);
  };

  // Function to handle equal button click
  const handleEqualClick = () => {
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    let result;
    switch (operator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        result = current;
    }
    setCurrentValue(result.toString());
    setPreviousValue(null);
    setOperator(null);
  };

  // Function to handle clear button click
  const handleClearClick = () => {
    setCurrentValue('0');
    setPreviousValue(null);
    setOperator(null);
  };

  return (
    <div>
      <div className="main border w-80 h-96 m-auto mt-10 flex flex-col items-center justify-center bg-red-300">
        <input type="number" value={currentValue} className="border border-black p-2" readOnly />
        <div className="r-1 flex items-center justify-evenly  w-52 mt-5">
          <button onClick={() => handleNumberClick(9)} className="bg-blue-300 p-3 rounded-full h-10 w-10 text-center">9</button>
          {/* Add similar onClick handlers for other number buttons */}
          <button onClick={() => handleOperatorClick('+')} className="bg-blue-300 p-3 rounded-full h-10 w-10 text-center">+</button>
        </div>
        {/* Add similar divs for other rows of buttons */}
        <div className="r-1 flex items-center justify-evenly w-52 mt-5">
          <button onClick={handleEqualClick} className="bg-blue-300 p-3 rounded-full h-10 w-10 text-center">=</button>
          <button onClick={handleClearClick} className="bg-blue-300 p-3 rounded-full h-10 w-10 text-center">C</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
