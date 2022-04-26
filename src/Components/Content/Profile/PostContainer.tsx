import React from "react";
import {connect} from "react-redux";
import {Post} from "./Post";
import {RootStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC, ProfileStateType, updateNewPostAC} from "../../../Redux/profile-reducer";

type MapStateToPropsType = {
    profilePage: ProfileStateType
}

type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export type PostsContainerType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state:RootStateType):MapStateToPropsType => {
  return {
      profilePage: state.profilePage
  }
}

const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
  return {
      addPost: () => {
          dispatch(addPostAC())
      },
      updateNewPostText: (text: string) => {
          dispatch(updateNewPostAC(text))
      }
  }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Post)

