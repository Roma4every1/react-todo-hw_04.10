import { user } from "../../../models/user";
import { UserReducerEnum} from "./actionTypes";
import { getUsers } from "../../../api/services/usersService/service";
import {AnyAction, Dispatch} from "@reduxjs/toolkit";

export const getUsersDataAction = () => {
    return async (dispatch: Dispatch<AnyAction>) => {

        if (dispatch === undefined) return
        const data = await getUsers()
        dispatch(setUsersToStore(data))
    }
}

export const setUsersToStore = (users: user[]) => {
    return {type: UserReducerEnum.SET_USERS, users}
}

