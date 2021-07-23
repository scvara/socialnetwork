import React from 'react';
import { NavLink } from 'react-router-dom';
import h from './../Header/Header.module.css';

const Header = () => {
    return (
        <div className={h.header}>
            <div className={h.container}>
                <div className={h.header_logo}>
                    <img className={h.logo} src="https://upload.wikimedia.org/wikipedia/commons/6/68/WeekToDo_Logo.png" alt="logo" />
                </div>
            </div>
            <div className={h.login_btn}><NavLink to='/login'>🔒 Log In</NavLink></div>
        </div>
    );
}

export default Header;