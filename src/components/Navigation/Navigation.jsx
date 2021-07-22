import React from 'react';
import n from './../Navigation/Navigation.module.css';

const Navigation = () => {
    return (
        <div className={n.navigation}>
            <div className={`${n.myprofile} ${n.nav_item}`}><a href='/myprofile'>Profile</a></div>
            <div className={`${n.messages} ${n.nav_item}`}><a href='/messages'>Messages</a></div>
            <div className={`${n.news} ${n.nav_item}`}><a href='/news'>News</a></div>
            <div className={`${n.music} ${n.nav_item}`}><a href='/music'>Music</a></div>
            <div className={`${n.settings} ${n.nav_item}`}><a href='/settings'>Settings</a></div>
        </div>
    )
};

export default Navigation;