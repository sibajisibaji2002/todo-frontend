import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [val, setVal] = useState("");
    function handleAdd() {
        addTodo(val)
        setVal("");
    }

    return (
        <>
            <div className="text-center mt-5">
                <input
                    type="text"
                    placeholder="enter task"
                    value={val}
                    className=" p-2 border border-1 border-slate-950 bg-slate-300 me-2"
                    onChange={(e) => {
                        setVal(e.target.value);
                        console.log(val);
                    }}
                />
                <button className="bg-lime-500 p-2 m-2" onClick={handleAdd}>
                    Add
                </button>
            </div>

        </>
    )
}

export default TodoForm