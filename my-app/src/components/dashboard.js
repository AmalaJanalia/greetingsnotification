import React from "react";
import ReactDOM from "react-dom";

let greeting;

const date=new Date();
const currentTime=date.getHours();

if(currentTime<12){
    greeting="Good Morning"
}
else if(currentTime<18){
    greeting="Good Afternoon"
}
else{
    greeting="Good Night"
}

function DashBoard(){
return(
    <h1 className="heading">{greeting}</h1>
)
}
 



export default DashBoard;