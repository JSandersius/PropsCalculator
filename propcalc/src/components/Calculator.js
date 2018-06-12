import React from "react";
//need to import component in order to use it 
import Math from "./Math";

// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
  // num1, operator, and num2
    
// Math should return a span tag displaying the result e.g.  19 + 341 = 360
const Calculator = () => (
  // now need to replace each ? with the math component
    //after this we need to pass three props to the math compenent
      //we give the props the names num1, operator and num 2
        // when doing this we must remember to wrap the numbers in brackets to let the compiler know that the enclosed coe is javasctipt

  <div>
    <p>
      19 + 341 = <Math num1={19} operator="+" num2={142} /> 
    </p>
    <p>
      42 - 17 = <Math num1={42} operator="-" num2={17}/>
    </p>
    <p>
      100 * 3 = <Math num1={100} operator="*" num2={3}/>
    </p>
    <p>
      96 / 4 = <Math num1={96} operator="/" num2={4}/>
    </p>
  </div>
);

export default Calculator;

//we're going to create a a new component called Math.js
