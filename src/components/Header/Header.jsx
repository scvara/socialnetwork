import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Header/Header.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <div className={s.header_logo}>
                    <img className={s.logo} src="https://upload.wikimedia.org/wikipedia/commons/6/68/WeekToDo_Logo.png" alt="logo" />
                </div>
            </div>
            <div className={s.login_btn}><NavLink to='/login'>🔒 Log In</NavLink></div>
        </div>
    );
}

export default Header;