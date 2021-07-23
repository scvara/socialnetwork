import React from 'react';
import d from './../Dialogs/Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const MessageItem = (props) => {
    return (
        <div className={d.chat}>
            <div>{props.message}</div>
        </div>
    );
}

const DialogItem = (props) => {
    return (
        <div className={d.friends_item}>
            <NavLink to={'/messages/' + props.id} className={d.friends_item}>{props.name}</NavLink>
        </div>
    );
}

const Dialogs = () => {
    return (
        <div className={d.dialogs}>
            <h2 className={d.dialogs_title}>Dialogs</h2>
            <div className={d.dialogs_items}>
                <div className={`${d.dialogs_item} ${d.first}`}>
                    <div className={d.friends}>
                        <DialogItem name='Alex' id='1' />
                        <DialogItem name='Sollo' id='2' />
                        <DialogItem name='Alina' id='3' />
                        <DialogItem name='Polina' id='4' />
                    </div>
                </div>
                <div className={`${d.dialogs_item} ${d.second}`}>
                    <MessageItem message='Lorem ipsum dolor sitconsectetur adipisicing elit. amet consectetur adipisicing elit.consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.' />
                    <MessageItem message='consectetur Lorem ipsum dolor sitconsectetur adipisicing elit. amet consectetur adipisicing elit.adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.' />
                    <MessageItem message='Lorconsectetur adipisicing elit.em ipsum dolor sit amet cLorem ipsum dolor sitconsectetur adipisicing elit. amet consectetur adipisicing elit.onsectetur adipisicing elit.' />
                    <MessageItem message='Lorem ipsum dolor sitconsectetur adipisicing elit. amet conLorem ipsum dolor sitconsectetur adipisicing elit. amet consectetur adipisicing elit.sectetur adipisicing elit.' />
                </div>
            </div>
        </div>
    );
}


export default Dialogs;