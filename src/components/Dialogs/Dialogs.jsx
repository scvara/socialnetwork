import React from 'react';
import s from './../Dialogs/Dialogs.module.css';
import DialogItem from './../Dialogs/DialogItem/DialogItem';
import MessageItem from './../Dialogs/MessageItem/MessageItem';



const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <h2 className={s.dialogs_title}>Messages</h2>
            <div className={s.dialogs_items}>
                <div className={`${s.dialogs_item} ${s.first}`}>
                    <DialogItem dialogs={props.dialogs} />
                </div>
                <div className={`${s.dialogs_item} ${s.second}`}>
                    <MessageItem messages={props.messages} />
                </div>
            </div>
        </div>
    );
}


export default Dialogs;