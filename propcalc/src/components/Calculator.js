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

  <div>
    <p>
      19 + 341 = <Math /> 
    </p>
    <p>
      42 - 17 = <Math />
    </p>
    <p>
      100 * 3 = <Math />
    </p>
    <p>
      96 / 4 = <Math />
    </p>
  </div>
);

export default Calculator;

//we're going to create a a new component called Math.js
