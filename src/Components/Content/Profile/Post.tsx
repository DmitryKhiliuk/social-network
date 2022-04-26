import React, {ChangeEvent} from 'react';
import {PostsContainerType} from "./PostContainer";
import picture from './../../../pictures/zhivotnye_kot_animaciya_30978.gif'
import styles from './Post.module.css'

export const Post = (props:PostsContainerType) => {

    const postsElements = props.profilePage.posts.map(el =>
        <div> <img className={styles.img} src={picture} alt=""/> {el.message}
            <div>like {el.likesCount}</div></div>
    );
    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    const onClickHandler = () => {
        props.addPost()
    }

    return (
        <div>
            <div className={styles.profile}>
                <textarea onChange={onChangeHandler} value={props.profilePage.newPostText}></textarea>
                <button onClick={onClickHandler}>Add</button>
            </div>
            <div>{postsElements}</div>
        </div>

    );
};

