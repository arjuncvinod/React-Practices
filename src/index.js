//practice #1

var React = require("react");
var ReactDOM = require("react-dom");

const img = "https://picsum.photos/200";
let a = 1;
const style = {
  color: "red",
  fontSize: "50px",
  textAlign: "center"
};
if (a === 1) {
  style.color = "blue";
} else if (a === 2) {
  style.color = "green";
}

ReactDOM.render(
  <div>
    <h1 style={style}>Random images</h1>
    <img alt="" src={img} />
  </div>,
  document.getElementById("root")
);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

//Practice #2

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";
let style={
  color:"red"
}
let day="night"
const date=new Date()
let hour = date.getHours()
if(hour<12){
  day="Morning"
  style.color="red"
}else if(hour>=12 && hour<18){
 day="After Noon"
 style.color="green"
}
else if(hour>=18 && hour<24){
 day="Night"
 style.color="blue"
}
ReactDOM.render(<h1 className="heading" style={style}>Good {day}</h1>, document.getElementById("root"));
