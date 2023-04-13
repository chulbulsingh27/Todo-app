import React from 'react'

export default function ({t,handleDelete,handleEdit}) {
    return (
        <div>
            <button onClick={() => handleEdit(t.id)}>Edit</button>
            <button onClick={() => handleDelete(t.id)}>Delete</button>
        </div>
    )
}
