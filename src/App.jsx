// // import React from "react"
// import { useState } from "react";

// const App = () => {
//   const [val, setVal] = useState("");
//   const [todo, setTodo] = useState([]);

//   function addTodo() {
//     if (val.trim() === "") {
//       alert("pls enter input");
//       return;
//     }

//     setTodo([...todo, { title: val, id: Date.now() }]);
//     setVal("");
//   }
//   console.log(todo);
//   return (
//     <>
//       <h1 className="text-center mt-10 font-bold text-4xl">Todo App</h1>
//       <div className="text-center mt-5">
//         <input
//           type="text"
//           placeholder="enter task"
//           value={val}
//           className=" p-2 border border-1 border-slate-950 bg-slate-300 me-2"
//           onChange={(e) => {
//             setVal(e.target.value);
//             console.log(val);
//           }}
//         />
//         <button className="bg-lime-500 p-2 m-2" onClick={addTodo}>
//           Add
//         </button>
//       </div>
//       <div className="text-center bg-yellow-100 mt-3">
//         {todo.map((item) => (
//           <div>
//             {item.title}
//             <button className="p-2 m-2 bg-cyan-500">Del</button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };
// export default App;


//file seperation

import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState([]);

  function addTodo(val) {
    if (val.trim() === ("")) {
      alert("pls enter input");
      return;
    }

    setTodo([...todo, { title: val, id: Date.now() }]);
  }
  console.log(todo);
  return (
    <>
      <h1 className="text-center mt-10 font-bold text-4xl">Todo App</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todo={todo}/>
      
      
    </>
  );
};
export default App;

