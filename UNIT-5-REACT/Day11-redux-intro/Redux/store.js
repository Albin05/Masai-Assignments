import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";

const store = createStore(reducer, initState);

const initState = {
    todos: [],
};

store.getState();

const conatiner = document.getElementById("container");

