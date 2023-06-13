
import { useState } from 'react';
import './App.css';
import Body from './component/Body';
import Header from './component/Header';

function App() {
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("listNotes")) || [])

  const addNewNote = (addNote) => {
    console.log(addNote);
    if (addNote.note == "" || (addNote.note.length == 0)) {
      alert("Enter Note")
    } else {
      const newNote = [...notes, addNote]
      setNotes(newNote)
      localStorage.setItem("listNotes", JSON.stringify(newNote))

    }

  }
  const deleteItem = (idNote) => {
    console.log(idNote);
    const updateNotes = notes.filter((item) => {
      return item.id !== idNote;
    })
    setNotes(updateNotes);
    localStorage.setItem("listNotes", JSON.stringify(updateNotes))
  }
  return (
    <div className="Container-app">
      <Header />
      <div className='body-container'>
        <Body addNote={addNewNote} notes={notes} deleteItem={deleteItem} />
      </div>

    </div>
  )
}

export default App;
