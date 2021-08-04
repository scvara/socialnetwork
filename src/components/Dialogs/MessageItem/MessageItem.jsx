import React from 'react';
import s from './MessageItem.module.css';
import { updateNewMessageActionCreator, addMessageActionCreator} from './../../../redux/state';



const MessageItem = (props) => {
    let newMessageText = React.createRef();

    let onMessageChange = () => {
        let text = newMessageText.current.value;
        props.dispatch(updateNewMessageActionCreator(text));
    };

    let addNewMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

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
                <textarea onChange={onMessageChange} ref={newMessageText} value={props.newMessageText}  className={s.message_area}></textarea>
                <button onClick={addNewMessage} className={s.my_posts_btn}>Send</button>
            </div>
        </div>
    )
}


export default MessageItem;