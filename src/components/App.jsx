import React from "react";
import ReactDOM from "react-dom";
import Heading from "./heading";
import Note from "./Note";
import Footer from "./Footer"
import Allnotes from "../Allnotes"
import {useState} from "react";
import NewNote from "./NewNote"




function App()
{
  const [Allnotes, setNotes] = useState([]);

    function addNote(newNote) {
      setNotes(prevNotes => {
        return [...prevNotes, newNote];
      });
    }

    function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (<div><Heading />
    <NewNote onAdd={addNote} />
    {Allnotes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

    <Footer />
    </div>);

}
export default App;
