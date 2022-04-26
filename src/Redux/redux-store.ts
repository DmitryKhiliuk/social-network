import {combineReducers, createStore} from "redux";
import {AddPostActionType, profileReducer, UpdateNewPostActionType} from "./profile-reducer";
import {addMessageACType, messagesReducer, updateMessageACType} from "../Components/Content/Messages/messages-reducer";

export type ActionType = AddPostActionType | UpdateNewPostActionType | addMessageACType | updateMessageACType

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducer
})

type ReducersType = typeof rootReducer
export type RootStateType = ReturnType<ReducersType>

export let store = createStore(rootReducer)