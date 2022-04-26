import {ActionType} from "../../../Redux/redux-store";
import {v1} from "uuid";


let initialState:MessagesType = {
    messages: [],
    newMessage: ''
}

type MessageType = {
    id: string
    message: string
}

export type MessagesType = {
    messages: MessageType[]
    newMessage: string
}

export const messagesReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            let newMes = {
                id: v1(),
                message: state.newMessage
            }
            return {...state, messages: [newMes, ...state.messages], newMessage:''}
        }
        case "UPDATE-MESSAGE": {
            return {...state, newMessage: action.newText}
        }
        default: {
            return state
        }
    }

}

export type addMessageACType = ReturnType<typeof addMessageAC>
export const addMessageAC = () => {
  return {
      type: 'ADD-MESSAGE'
  }as const
}

export type updateMessageACType = ReturnType<typeof updateMessageAC>
export const updateMessageAC = (newText:string) => {
  return {
      type: 'UPDATE-MESSAGE',
      newText: newText
  }as const
}