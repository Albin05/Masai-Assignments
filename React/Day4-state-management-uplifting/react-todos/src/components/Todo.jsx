import { useState } from "react";
import { TodoItem } from "./TodoItem";
import { nanoid } from "nanoid";
import { TodoInput } from "./TodoList";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const getData = (todo) => {
    const payload = {
      title: todo,
      status: false,
      id: nanoid(5),
    };
    setTodoList([...todoList, payload]);
  };

  const handleStatus = (id) => {
    console.log(id);
    setTodoList(
      todoList.map((e) => (e.id === id ? { ...e, status: !e.status } : e))
    );
  };

  return (
    <div>
      {todoList.map((e) => (
        <TodoItem handleStatus={handleStatus} todo={e}></TodoItem>
      ))}
      <TodoInput getData={getData} />
    </div>
  );
}

export { Todo };
