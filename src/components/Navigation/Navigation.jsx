import React from 'react';
import n from './../Navigation/Navigation.module.css';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className={n.navigation}>
            <div className={`${n.myprofile} ${n.nav_item}`}><NavLink to='/myprofile'>Profile</NavLink></div>
            <div className={`${n.messages} ${n.nav_item}`}><NavLink to='/messages'>Messages</NavLink></div>
            <div className={`${n.news} ${n.nav_item}`}><NavLink to='/news'>News</NavLink></div>
            <div className={`${n.music} ${n.nav_item}`}><NavLink to='/music'>Music</NavLink></div>
            <div className={`${n.settings} ${n.nav_item}`}><NavLink to='/settings'>Settings</NavLink></div>
        </div>
    )
};

export default Navigation;