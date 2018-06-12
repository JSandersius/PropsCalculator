//this is going to be a react component, so we need to rememeber to import react from react
//create our component variable and export it 

import react from "react";
//lets make sure that Math accepts props 
//before anything lets retunr a span with all the props that are being 
	//passed in to ensure everything is working properly 
const Math = (props) => {

	return <span>{props.num1} {props.operator} {props.num2}</span>;
	} 


export default Math; 