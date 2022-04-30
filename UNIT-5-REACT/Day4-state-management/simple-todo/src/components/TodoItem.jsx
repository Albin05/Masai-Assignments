import "./Todo.css";

export const TodoItem = ({ todo, handleStatus }) => {
  return (
    <div className="inputbox">
          {todo.title} - {todo.status ? "Done" : "Not Done"}<button onClick={() => handleStatus(todo.id)}>Toggle</button>
    </div>
  );
};
