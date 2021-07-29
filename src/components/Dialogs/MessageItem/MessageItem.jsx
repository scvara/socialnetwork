import React from 'react';
import s from './MessageItem.module.css';



const MessageItem = (props) => {

    let messageText = React.createRef();

    let addNewMessage = () => {
        let newMessageText = messageText.current.value;
        alert(newMessageText);
    }


    let message = props.messages.map((m) => {
        return (
            <div className={s.chat}>
                <div className={s.dialog_ava}></div>
                <div>{m.message}</div>
            </div>);
    });
    return (
        <div className={s.message_box}>
            <div>
                {message}
            </div>
            <div className={s.message_text_area}>
                <textarea ref={messageText} className={s.message_area} name='message' placeholder='Enter your message here'></textarea>
                <button onClick={addNewMessage} className={s.my_posts_btn}>Send</button>
            </div>
        </div>
    )
}


export default MessageItem;