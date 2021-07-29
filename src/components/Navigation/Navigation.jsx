import React from 'react';
import s from './../Navigation/Navigation.module.css';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';

const Navigation = (props) => {
    return (
        <div className={s.navigation}>
            <NavLink to='/myprofile' className={s.nav_itembox}><div className={`${s.myprofile} ${s.nav_item}`}>Profile</div></NavLink>
            <NavLink to='/messages' className={s.nav_itembox}><div className={`${s.messages} ${s.nav_item}`}>Messages</div></NavLink>
            <NavLink to='/news' className={s.nav_itembox}><div className={`${s.news} ${s.nav_item}`}>News</div></NavLink>
            <NavLink to='/music' className={s.nav_itembox}><div className={`${s.music} ${s.nav_item}`}>Music</div></NavLink>
            <NavLink to='/settings' className={s.nav_itembox}><div className={`${s.settings} ${s.nav_item}`}>Settings</div></NavLink>
            <Sidebar friendInfo = {props.friendInfo} />
        </div>
    )
};

export default Navigation;