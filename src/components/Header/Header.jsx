import React from 'react';
import h from './../Header/Header.module.css';

const Header = () => {
    return (
        <div className={h.header}>
            <div className={h.container}>
                <div className={h.header_logo}>
                    <img className={h.logo} src="https://upload.wikimedia.org/wikipedia/commons/6/68/WeekToDo_Logo.png" alt="logo" />
                </div>
            </div>
        </div>
    );
}

export default Header;