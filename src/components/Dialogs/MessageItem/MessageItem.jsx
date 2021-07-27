import React from 'react';
import d from './Dialogs.module.css';



const MessageItem = (props) => {
    let message = props.messages.map((m) => {
        return (
            <div className={d.chat}>
                <div className={d.dialog_ava}></div>
                <div>{m.message}</div>
            </div>);
    });
    return (
        <div>
            {message}
        </div>
    )
}


export default MessageItem;