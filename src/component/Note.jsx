import React from 'react'

export default function Note({ value, key, deleteItem }) {
    return (
        <div >
            <div className='noteItem' key={key}>
                <p>{value.note}</p>
                <div onClick={() => deleteItem(value.id)}><span className="material-symbols-outlined">
                    delete
                </span></div>
            </div>
        </div>

    )
}
