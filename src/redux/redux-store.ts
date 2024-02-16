import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {profileReducer, RootActionProfileType} from "./profile-reducer";
import {dialogsReducer, RootActionDialogType} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    users: usersReducer,
    auth: authReducer
});
type RootActions = RootActionDialogType | RootActionProfileType
export type RootStateRedux = ReturnType<typeof rootReducer>
export type RootStoreRedux = Store<RootStateRedux, RootActions>
export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
