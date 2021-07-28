import React from 'react';
import d from './MessageItem.module.css';



const MessageItem = (props) => {

    let messageText = React.createRef();

    let addNewMessage = () => {
        let newMessageText = messageText.current.value;
        alert(newMessageText);
    }


    let message = props.messages.map((m) => {
        return (
            <div className={d.chat}>
                <div className={d.dialog_ava}></div>
                <div>{m.message}</div>
            </div>);
    });
    return (
        <div className={d.message_box}>
            <div>
                {message}
            </div>
            <div className={d.message_text_area}>
                <textarea ref={messageText} className={d.message_area} name='message' placeholder='Enter your message here'></textarea>
                <button onClick={addNewMessage} className={d.my_posts_btn}>Send</button>
            </div>
        </div>
    )
}


export default MessageItem;