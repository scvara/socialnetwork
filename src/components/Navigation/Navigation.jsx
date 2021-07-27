import React from 'react';
import n from './../Navigation/Navigation.module.css';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';

const Navigation = (props) => {
    return (
        <div className={n.navigation}>
            <NavLink to='/myprofile' className={n.nav_itembox}><div className={`${n.myprofile} ${n.nav_item}`}>Profile</div></NavLink>
            <NavLink to='/messages' className={n.nav_itembox}><div className={`${n.messages} ${n.nav_item}`}>Messages</div></NavLink>
            <NavLink to='/news' className={n.nav_itembox}><div className={`${n.news} ${n.nav_item}`}>News</div></NavLink>
            <NavLink to='/music' className={n.nav_itembox}><div className={`${n.music} ${n.nav_item}`}>Music</div></NavLink>
            <NavLink to='/settings' className={n.nav_itembox}><div className={`${n.settings} ${n.nav_item}`}>Settings</div></NavLink>
            <Sidebar friendInfo = {props.friendInfo} />
        </div>
    )
};

export default Navigation;