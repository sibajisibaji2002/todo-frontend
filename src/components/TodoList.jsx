import React from 'react'

const TodoList = ({todo}) => {
    return (
        <>
            <div className="text-center bg-yellow-100 mt-3">
                {todo.map((item) => (
                    <div key={item.id}>
                        {item.title}
                        <button className="p-2 m-2 bg-cyan-500">Del</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TodoList