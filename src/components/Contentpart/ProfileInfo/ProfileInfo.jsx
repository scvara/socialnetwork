import React from 'react';
import p from './ProfileInfo.module.css';



const ProfileInfo = (props) => {
    return (
        <div className={p.profile_info}>
            <div className={p.profile_img}>
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
            </div>

        </div>
    );
}

export default ProfileInfo;