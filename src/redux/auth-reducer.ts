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
const SET_USER_DATA = "SET_USER_DATA";

let initialState: AuthReducerType = {
        id: null,
        email: null,
        login: null,
        isAuth: false
}
export const authReducer = (state = initialState, action: RootActionAuthType) => {
    debugger
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
export const getAuthUserDataTC = () => (dispatch: any) => {
    return authAPI.authMe()
        .then(res => {
        debugger
        if (res.data.resultCode === 0) {
            let {id, email, login} = res.data.data
            dispatch(setAuthUserDataAC(id, email, login, true))
        }
    });
}
export const LoginTC = (email:string, password:string, rememberMe:boolean) => (dispatch: any) => {
    authAPI.loginMe(email,password,rememberMe).then(res => {
        debugger
        console.log(res)
        if (res.data.resultCode === 0) {
            dispatch(getAuthUserDataTC())
        } else {
            let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error";
            dispatch(stopSubmit("contact", {_error: message}))
        }
    });
}
export const LogOutTC = () => (dispatch: any) => {
    authAPI.logOut().then(res => {
        debugger
        console.log(res)
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, null, null, false))
        }
    });
}
export const setAuthUserDataAC = (id: string | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({type: SET_USER_DATA, data: {id, email, login, isAuth}} as const)

export type RootActionAuthType = setUserDataActionType

type setUserDataActionType = ReturnType<typeof setAuthUserDataAC>
