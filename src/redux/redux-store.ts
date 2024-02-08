import {combineReducers, createStore, Store} from "redux";
import {profileReducer, RootActionProfileType} from "./profile-reducer";
import {dialogsReducer, RootActionDialogType} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    users: usersReducer,
});
type RootActions = RootActionDialogType | RootActionProfileType
export type RootStateRedux = ReturnType<typeof rootReducer>
export type RootStoreRedux = Store<RootStateRedux, RootActions>
export let store = createStore(rootReducer)
