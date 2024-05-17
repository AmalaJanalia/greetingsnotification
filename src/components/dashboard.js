import React from "react";

import { useLocation } from "react-router-dom";
let greeting;
const customStyle={
    color:""
}
const date=new Date();
const currentTime=date.getHours();

if(currentTime<12){
    greeting="Good Morning";
    customStyle.color="red";

}
else if(currentTime<18){
    greeting="Good Afternoon";
    customStyle.color="green";
}
else{
    greeting="Good Night";
    customStyle.color="blue";
}

function DashBoard(){
    const location = useLocation();
  const { username } = location.state || {};

return(
    <h1 className="heading" style={customStyle}>{greeting},{username}!
    </h1>
)
}
 



export default DashBoard;