import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

type AuthReducerType = {
    id: null | string
    email: null | string
    login: null | string
    isAuth: boolean
    captchaUrl: null
}
type RootAuthType = {
    data: AuthReducerType
}
const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";

let initialState: AuthReducerType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}
export const authReducer = (state = initialState, action: RootActionAuthType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                // isAuth: true
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
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
export const LoginTC = (email: string, password: string, rememberMe: boolean,captcha:string) => async (dispatch: any) => {
    let promise = await authAPI.loginMe(email, password, rememberMe, captcha)
    if (promise.data.resultCode === 0) {
        dispatch(getAuthUserDataTC())
    } else {
        if (promise.data.resultCode === 10) {
            dispatch(getCaptchaUrlTC())
        }
        let message = promise.data.messages.length > 0 ? promise.data.messages[0] : "Some error";
        dispatch(stopSubmit("contact", {_error: message}))
    }
}
export const getCaptchaUrlTC = () => async (dispatch: any) => {
    let promise = await securityAPI.getCaptcha()
    console.log(promise)
    const captchaUrl = promise.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}
export const LogOutTC = () => async (dispatch: any) => {
    let response = await authAPI.logOut()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false))
    }
}
export const setAuthUserDataAC = (id: string | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({type: SET_USER_DATA, data: {id, email, login, isAuth}} as const)
export const getCaptchaUrlSuccess = (captchaUrl: string) =>
    ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl} as const});

export type RootActionAuthType = setUserDataActionType | getCaptchaUrlSuccessActionType

type setUserDataActionType = ReturnType<typeof setAuthUserDataAC>
type getCaptchaUrlSuccessActionType = ReturnType<typeof getCaptchaUrlSuccess>
