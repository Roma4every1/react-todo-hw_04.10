import { todo } from './../../../models/todo';
import { TodoReducerEnum } from "./actionTypes";
import { getTodos } from '../../../api/services/todoService/service';
import {AnyAction, Dispatch} from "@reduxjs/toolkit";

export const getTodosDataAction = () => {
    return async (dispatch: Dispatch<AnyAction>) => {

        if (dispatch === undefined) return
        const data = await getTodos()
        dispatch(setTodosToStore(data))
    }
}



export const setTodosToStore = (todos: todo[]) => {
    return {type: TodoReducerEnum.SET_TODOS, todos}
}
export const setDeletedTodo = (deletedTodo: todo|null) => {
    return {type: TodoReducerEnum.SET_DELETED_TODO, deletedTodo}
}
