import React from 'react'
import Button from './Button'

export default function AllTodo({handleEdit,todos,handleDelete}) {
    return (
        <ul className='allTodos'>
            {
                todos.map((t) => (
                    <li className='singleTodo'>
                        <span className="todoText" key={t.id}>{t.todo}</span>
                        <Button  handleEdit={handleEdit} handleDelete={handleDelete } t={t}/>
                    </li>
                ))
            }
        </ul>
    )
}
