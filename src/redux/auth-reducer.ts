
type AuthReducerType = {
    id: null | string
    email: null | string
    login: null | string
    isAuth: boolean
}
type RootAuthType = {
    data:AuthReducerType
}
const SET_USER_DATA = "SET_USER_DATA";

let initialState: RootAuthType = {
    data: {
        id: null,
        email: null,
        login: null,
        isAuth: false
    }
}
export const authReducer = (state = initialState, action: RootActionAuthType) => {
    debugger
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state
    }
}
export const setAuthUserDataAC = (id:string, email:string, login:string) =>
    ({type: SET_USER_DATA, data:{id, email, login}} as const)

export type RootActionAuthType = setUserDataActionType

type setUserDataActionType = ReturnType<typeof setAuthUserDataAC>
