import {ActionType} from "./redux-store";
import {v1} from "uuid";

let initialState = {
    posts: [],
    newPostText: ''
}

export type ProfileStateType = {
    posts: PostsType[]
    newPostText: string

}
type PostsType = {
    id: string
    message: string
    likesCount: number
}

export const profileReducer = (state = initialState, action: ActionType ):ProfileStateType => {
    switch (action.type ){
        case "ADD-POST": {
            let newPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        }
        case "NEW-POST": {
            return {...state, newPostText: action.newText}
        }
        default:
            return state
    }

}

export type AddPostActionType = ReturnType<typeof addPostAC>
export let addPostAC = () => {
    return {
        type:  'ADD-POST'
    } as const
}

export type UpdateNewPostActionType = ReturnType<typeof updateNewPostAC>
export let updateNewPostAC = (newText:string) => {
    return {
        type: 'NEW-POST',
        newText: newText
    } as const
}