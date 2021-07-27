import React from 'react';
import d from './../Dialogs/Dialogs.module.css';
import DialogItem from './../Dialogs/DialogItem/DialogItem';
import MessageItem from './../Dialogs/MessageItem/MessageItem';



const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <h2 className={d.dialogs_title}>Messages</h2>
            <div className={d.dialogs_items}>
                <div className={`${d.dialogs_item} ${d.first}`}>
                    <DialogItem dialogs={props.dialogs} />
                </div>
                <div className={`${d.dialogs_item} ${d.second}`}>
                    <MessageItem messages={props.messages} />
                </div>
            </div>
        </div>
    );
}


export default Dialogs;