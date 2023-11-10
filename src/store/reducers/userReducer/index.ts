import {Action, Reducer} from "@reduxjs/toolkit";
import { UserReducerEnum } from "./actionTypes";
import { user } from "../../../models/user";

type UserReducerType = {
    users: user[]
}

const defaultState:UserReducerType = {
    users:[],
}

const userReducer: Reducer<UserReducerType> = (state = defaultState, action) => {
    switch (action.type) {
        case UserReducerEnum.SET_USERS:
            return {...state, users: action.users}
        default:
            return {...state}
    }
}

export default userReducer