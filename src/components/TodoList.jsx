import React from 'react'

const TodoList = ({todo, delTodo}) => {
    function handleDel(id){
        delTodo(id)
    }


    return (
        <>
            <div className="text-center bg-yellow-100 mt-3">
                {todo.map((item) => (
                    <div key={item.id}>
                        {item.title}
                        <button className="p-2 m-2 bg-cyan-500" onClick={()=>handleDel(item.id)}>Del</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TodoList