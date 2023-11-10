import {Action, Reducer} from "@reduxjs/toolkit";
import { TodoReducerEnum } from "./actionTypes";
import { todo } from "../../../models/todo";
import { getTodos } from "../../../api/services/todoService/service";
import { getTodosDataAction } from "./actions";


type TodoReducerType = {
    todos: todo[]
    deletedTodo: todo | null
}

const defaultState:TodoReducerType = {
    todos:[],
    deletedTodo: null,
}

const filmReducer: Reducer<TodoReducerType> = (state = defaultState, action) => {
    switch (action.type) {
        case TodoReducerEnum.SET_TODOS:
            return {...state, todos: action.todos}
        case TodoReducerEnum.SET_DELETED_TODO:
            return {...state, deletedTodo: action.deletedTodo}
        default:
            return {...state}
    }
}

export default filmReducer