import { addTodo } from "./actions";

export const reducer = (store, action) => {
    switch (action.type) {
      case ADD_TODO:
        return { ...store, todos: [... store.todos, action.payload] };
      case REMOVE_TODO:
        return { ...store, };
      default:
        return store;
    }
}