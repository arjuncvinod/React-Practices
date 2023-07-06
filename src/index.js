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


//---------------------------------------------------------------------------------------

//practice #3

//React Components
import React from "react";
import ReactDOM from "react-dom";
import App from "./componets/App";

ReactDOM.render(<App />, document.getElementById("root"));



//---------------------------------------------------------------------------------------------------

//practice #4

//React Props
import React from "react";
import ReactDOM from "react-dom";


function Card(props){
 return(
   <div>
  <h2>{props.name}</h2>
    <img 
      src={props.img}
      alt="avatar_img"
    />
    <p>{props.tel}</p>
    <p >{props.email}</p>
</div>
 )
}
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card  name="Beyonce" img=" https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    tel="+123 456 789" email="b@beyonce.com"
    />
   <Card name="Jack Bauer" img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
   tel="+987 654 321" email="jack@nowhere.com"/>
</div>
   ,
  document.getElementById("root")
);

/*--------------------------------------------------------------------------------------------------------------------------------------*/
//practice #5
//Login and registration forms rendered conditionally
//Used Ternary operator and &&

import React from "react";
import Login from "./Login"

var isLoggedIn=false
var registered=false

function login(props){
    return (
      <form className="form">
        <Input type="text" placeholder="Username"/>
        <Input type="password" placeholder="Password" />
        {props.isRegistered ? null :<Input type="password" placeholder="Confirm Password" />}
        <button type="submit">
        {props.isRegistered? "Login" : "Register" }
        </button>:
    
      </form>
    );
  function input(props){
    return <input type={props.type} placeholder={props.placeholder} />
}

function App() {
  return (
    <div className="container">
      {isLoggedIn?<h1>Hello</h1>:<Login isRegistered={registered}/>}
    </div>
  );
}
export default App;


//practice #6
//mouseevents
import React, { useState } from "react";

function App() {

  const [text,setText]=useState("hello")
  const [sty,setSty]=useState(false)
  function click() {
    setText("submitted")
    
  }
function setStyle(){
 setSty(true)
}
function remStyle(){
  setSty(false)
  
}
  return (
    <div className="container">
      <h1>{text}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={click} onMouseOver={setStyle} style={{backgroundColor: sty ? "white" : "black"}}
      onMouseOut={remStyle} >Submit</button>
    </div>
  );
}

export default App;

//-----------------------------------------------------------------------------------------------------------------------------------------


//Practice #7
//React form event handling 

import React, { useState } from "react";

function App() {
const [name,setName]= useState("")
const [text,setText]=useState("")
function handleChange(event){
 setName(event.target.value)
}
function handleSubmit(event){  
setText(name)

event.preventDefault()
}

  return (
    <div className="container">
      <h1>Hello {text}</h1>
      <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" placeholder="What's your name?" />
      <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default App;



