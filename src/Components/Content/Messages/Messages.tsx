import React, {ChangeEvent,KeyboardEvent} from 'react';
import {MessagesContainerType} from "./MessagesContainer";



export const Messages = (props:MessagesContainerType) => {


    let newElement = props.messagePage.messages.map(el => <div>{el.message}</div>)

    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.updateMessage(e.currentTarget.value)
    }

    const onClickHandler = () => {
        props.addMessage()
    }

    const onKeyPressHandler = (e:KeyboardEvent<HTMLTextAreaElement>) => {
      e.key === 'Enter' && props.addMessage()
    }


    return (
        <div>
            <div>
                <textarea onChange={onChangeHandler} onKeyPress={onKeyPressHandler} value={props.messagePage.newMessage}></textarea>
                <button onClick={onClickHandler}>Add Message</button>
            </div>
            <div>
                {newElement}
            </div>
        </div>
    );
};

