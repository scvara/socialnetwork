import React from 'react';
import p from './../Contentpart/Profile.module.css'

const Profile = () => {
    return (
        <div className={p.profile}>
            <div className={p.profile_img}></div>
            <div className={p.user_info_box}>
                <div className={p.user}>
                    <div className={p.user_ava}>
                        <img src="https://i2.wp.com/nofiredrills.com/wp-content/uploads/2016/10/myavatar.png?fit=400%2C400&ssl=1" alt="avatar" />
                    </div>
                    <div className={p.user_info}>
                        <h3 className={p.name}>John</h3>
                        <h4 className={p.surname}>Doe</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Profile;