import React from "react";
import ReactDOM from "react-dom/client";

const heading =  React.createElement("h1",{id:"heading"},"Namaste React");

const jsxHeading = <h1 id="heading">Namaste react using JSX</h1>;

console.log(jsxHeading);


//React Functional components

const Title = () => (
		<div>
		 <h1 className="head">Namaste react Title compoent</h1>
		 </div>
		 );


const HeadingComponent = () => (
	<div id="container">
	      {jsxHeading}
	      <Title/>
		 <h1 id="heading">Namaste react Functional component</h1>
	</div>
);




const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);

//root.render(jsxHeading);

root.render(<HeadingComponent/>);