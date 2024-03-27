import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserDataTC} from "./auth-reducer";
import {debuglog} from "util";

export type AuthReducerType = {
    initialized: false
}
type RootAuthType = {
    data: AuthReducerType
}
const SET_INITIALIZED = "app/SET_INITIALIZED";

let initialState: AuthReducerType = {
    initialized: false
}
export const appReducer = (state = initialState, action: RootActionAuthType) => {
    debugger
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
                // isAuth: true
            };
        default:
            return state
    }
}
export const initializedSuccessAppTC = () => (dispatch: any) => {
    debugger
    let promise = dispatch(getAuthUserDataTC());
    Promise.all([promise])
        .then(()=>{
            debugger
            dispatch(initializedSuccessAC())
        })
    // promise.then(()=>{
    //     debugger
    //     dispatch(initializedSuccessAC())
    // })
}
export const initializedSuccessAC = () =>
    ({type: SET_INITIALIZED} as const)

export type RootActionAuthType = setUserDataActionType

type setUserDataActionType = ReturnType<typeof initializedSuccessAC>
