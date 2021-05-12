import React from "react";
import ReactDOM from "react-dom";
import {useState} from "react";



function Heading()
{
  var clock=new Date().getMinutes();
  var clockH=new Date().getHours();
  var clockD=new Date().toLocaleDateString();
  var [time,setTime]=useState(clock);
  var [timeH,setTimeH]=useState(clockH);
  var [date,setDate]=useState(clockD);
  function updateTime()
  {
    var newTime= new Date().getMinutes();
    var newTimeH=new Date().getHours();
    setTime(newTime);
    setTimeH(newTimeH);
    var newDate= new Date().toLocaleDateString();
    setDate(newDate);
  }

setInterval(updateTime,1000);
    return (<div className ="top"><heading>
      <div id="appname"><h1>Noted.App</h1></div>
      <div id="clock">{date}    -    {timeH} : {time}</div>

      </heading></div>);
}
export default Heading;
