
import { ADD_TODO } from "./action";

// Store: {counter: 0}
export const counterReducer = (store, {type, payload}) => {
    switch (type) {
        case ADD_TODO:
            return { ...store, todos: [...store.todos, payload] };
        default:
            return store
    }
}