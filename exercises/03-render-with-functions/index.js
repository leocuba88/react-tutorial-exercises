import React from "react"; //Main React.js library

import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// This function returns a string that will be rendered
export const PrintHello = () => {
	return <h1>{iLoveReact}</h1>;
};
let iLoveReact = "I Love React";

//              what           where
ReactDOM.render(PrintHello(), document.querySelector("#myDiv"));
