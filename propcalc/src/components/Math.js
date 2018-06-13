//this is going to be a react component, so we need to rememeber to import react from react
//create our component variable and export it 

import React from "react";
//lets make sure that Math accepts props 
//before anything lets retunr a span with all the props that are being 
	//passed in to ensure everything is working properly 
const Math = (props) => {
	let value; 

	switch (props.operator) {
		case "+":
			value = props.num1 + props.num2;
			break; 
		case "-":
			value = props.num1 - props.num2;
			break;
		case "*":
			value = props.num1 * props.num2;
			break;
		case "/":
			value = props.num1 / props.num2;	
			break; 
		default:
		value = NaN; 				
	}

	return <span>{value}</span>;
	} 
//now that this is all working properly, we need to do some logic 
	//lets get to some calculations before we return a value  
		//to do these calculations we are going to create a variable value
			//we'll create a switch statement to run the calculation depending 
			//on the operator and set the variable value based on that 
				//we can then return a span with the calculated value 


export default Math; 