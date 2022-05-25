import "./Todo.css";

export const TodoItem = ({ todo, handleStatus }) => {
  return (
    <div className="inputbox">
          {todo.title}<input className="todo" type="radio" onClick={() => handleStatus(todo.id)}/>
    </div>
  );
};
