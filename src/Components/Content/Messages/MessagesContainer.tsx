import React from "react";
import {connect} from "react-redux";
import {Messages} from "./Messages";
import {addMessageAC, MessagesType, updateMessageAC} from "./messages-reducer";
import {Dispatch} from "redux";
import {RootStateType} from "../../../Redux/redux-store";


type mapStateToPropsType = {
    messagePage: MessagesType
}

type mapDispatchToPropsType = {
    addMessage: () => void
    updateMessage: (text:string) => void
}

export type MessagesContainerType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state:RootStateType) => {
    return {
        messagePage: state.messagePage
    }

}

const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateMessage: (text:string) => {
            dispatch(updateMessageAC(text))
        }
    }

}

export const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages)

