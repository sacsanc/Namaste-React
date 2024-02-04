import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"I am h1h1 tag!!")));

console.log(parent);
const heading = React.createElement("h1",{id:"heading"},"Hello World! from react from App.js!!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
///root.render(heading);
root.render(parent);