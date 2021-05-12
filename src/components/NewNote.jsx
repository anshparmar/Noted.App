import React from "react";
import ReactDOM from "react-dom";
import {useState} from "react";
import Allnotes from "../Allnotes";
function NewNote(props) {

var [title,setTitle]=useState("");
var [content,setTitle1]=useState("");

function handleChange(event)
{
  setTitle(event.target.value);
}
function handleChange1(event)
{
  setTitle1(event.target.value);
}
function makeNote()
{
  props.onAdd({title,content});
  setTitle("");
  setTitle1("");
}
  return (
    <div className="note">
    <form >
    <textarea type="text" id="inputTitle" placeHolder="Click to add Title" onChange={handleChange} value={title} />
    <textarea type="text" id="inputContent" placeHolder="Click to add Content" onChange={handleChange1} value={content} />
    </form>
    <button type="button" class="btn" onClick={makeNote}>Make Note</ button>
    </div>
  );
}
export default NewNote;
