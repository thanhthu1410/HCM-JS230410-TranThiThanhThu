import React, { useState } from 'react'
import Note from './Note';


export default function Body({ addNote, notes, deleteItem }) {
    console.log(notes);
    const [note, setNote] = useState("")
    function uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
    return (
        <div>
            <div className='textarea-container'>
                <div className='content-item'>
                    <textarea value={note} onChange={(event) => setNote(event.target.value)} name="" id="" cols="30" rows="5" placeholder='Take a note...'></textarea>
                    <button onClick={() => { addNote({ id: uuidv4(), note: note }); setNote("") }}>+</button>
                </div>
            </div>
            <div className='container-noteItem'>
                {notes.map((value, index) => (<Note value={value} key={index} deleteItem={deleteItem} />))}
            </div>
        </div>
    )
}
