import React from 'react';
import s from './Friend.module.css';
import { NavLink } from 'react-router-dom';

const Friend = (props) => {
    let friend = props.friendInfo.map(f => {
        return (
            <div className={s.friend_box}>
                <NavLink to={'/friends/' + f.id} className={s.nav_itembox} friendid={f.id}>
                    <div className={s.sidebar_friend}>
                        <div className={s.sidebar_ava}></div>
                        <div className={s.sidebar_name}>{f.name}</div>
                    </div>
                </NavLink>
            </div>
        );
    });
    return (
        <div>
            {friend}
        </div>
    );
};

export default Friend;