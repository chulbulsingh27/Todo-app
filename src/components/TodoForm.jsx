import React from 'react'

export default function ({handleSubmit,todo,setTodo,editId}) {
    return (
        <form className='todoForm' onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}></input>
            <button type="submit"> {editId ? "Edit" : "Add"}</button>
        </form>
    )
}
