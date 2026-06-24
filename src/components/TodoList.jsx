import React from 'react'
import { RiDeleteBin7Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const TodoList = ({ todo, delTodo, editTodo }) => {
    function handleDel(id) {
        delTodo(id)
    }

    function handleUpdate(todo) {
        editTodo(todo)
    }



    return (
        <>
            <div className="text-center bg-yellow-100 mt-3">
                {todo.map((item) => (
                    <div key={item.id} className='w-[40%] flex m-auto '>
                        <div className='w-[80%]'>{item.title}</div>
                        <div className='w-[20%]'>
                            <button className="p-2 m-2 bg-cyan-500" onClick={() => handleUpdate(item)}><FaEdit /></button>
                            <button className="p-2 m-2 bg-cyan-500" onClick={() => handleDel(item.id)}><RiDeleteBin7Line /></button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TodoList