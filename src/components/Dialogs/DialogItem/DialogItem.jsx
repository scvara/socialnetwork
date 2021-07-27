import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItems = (props) => {
    let dialogs = props.dialogs.map((d) => {
        return (
            <div>
                <NavLink to={'/messages/' + d.id} className={s.dialog_item_box}>
                    <div className={s.dialog_ava}></div>
                    <div className={s.dialog_name}>{d.name}</div>
                </NavLink>
            </div>
        )
    });
    return (
        <div>
            {dialogs}
        </div>
    )
}


export default DialogItems;