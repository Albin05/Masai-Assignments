import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo } from "../Redux/action";

export const Todos = () => {
  const todos = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleAdd = () => {
    dispatch(
      addTodo({
        title: text,
        status: false,
      })
    );
    };
    
    const deleteTodo = () => {
        
    }

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>Add Todo</button>
      {todos.map((t) => (
        <div key={t.title}>{t.title}</div>
      ))}
    </div>
  );
};
