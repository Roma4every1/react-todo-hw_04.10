import {AnyAction, combineReducers, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import taskReducer from "./reducers/taskReducer";
import userReducer from "./reducers/userReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import thunk from "redux-thunk";

const appReducer = combineReducers({taskReducer, userReducer})


export const store = configureStore({

    reducer: appReducer,
    middleware: getDefaultMiddleware => [...getDefaultMiddleware(), thunk]
})

export type AppStateType = ReturnType<typeof appReducer>
export type AppDispatchType = ThunkDispatch<AppStateType, null, AnyAction>

export const useAppDispatch: ()=> AppDispatchType= useDispatch
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector