import React from 'react';
import Friend from './Friend/Friend';
import s from './Sidebar.module.css';


const Sidebar = (props) => {

    return (
        <div className={s.sidebar_box}>
            <div className={s.sidebar_title}>Friends</div>
            <div className={s.sidebar_friends}>
            <Friend friendInfo={props.friendInfo} />
            </div>
        </div>
    );
};

export default Sidebar;