import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

type AuthReducerType = {
    id: null | string
    email: null | string
    login: null | string
    isAuth: boolean
}
type RootAuthType = {
    data: AuthReducerType
}
const SET_USER_DATA = "auth/SET_USER_DATA";

let initialState: AuthReducerType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
export const authReducer = (state = initialState, action: RootActionAuthType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                // isAuth: true
            };
        default:
            return state
    }
}
export const getAuthUserDataTC = () => async (dispatch: any) => {
    let response = await authAPI.authMe()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserDataAC(id, email, login, true))
    }
}
export const LoginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    let promise = await authAPI.loginMe(email, password, rememberMe)
    if (promise.data.resultCode === 0) {
        dispatch(getAuthUserDataTC())
    } else {
        let message = promise.data.messages.length > 0 ? promise.data.messages[0] : "Some error";
        dispatch(stopSubmit("contact", {_error: message}))
    }
}
export const LogOutTC = () => async (dispatch: any) => {
    let response = await authAPI.logOut()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false))
    }
}
export const setAuthUserDataAC = (id: string | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({type: SET_USER_DATA, data: {id, email, login, isAuth}} as const)

export type RootActionAuthType = setUserDataActionType

type setUserDataActionType = ReturnType<typeof setAuthUserDataAC>
