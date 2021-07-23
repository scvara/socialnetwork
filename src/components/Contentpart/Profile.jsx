import React from 'react';
import p from './../Contentpart/Profile.module.css'
import MyPosts from './Myposts/MyPosts';

const Profile = () => {
    return (
        <div className={p.profile}>
            <div className={p.profile_img}></div>
            <div className={p.user_info_box}>
                <div className={p.user}>
                    <div className={p.user_ava}>
                        <img src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png" alt="avatar" />
                    </div>
                    <div className={p.user_info}>
                        <h3 className={p.name}>John</h3>
                        <h4 className={p.surname}>Doe</h4>
                    </div>
                </div>
            </div>
            <MyPosts />
        </div>
    );
}


export default Profile;