import React from 'react';
import p from './../Contentpart/Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './Myposts/MyPosts';


const Profile = (props) => {
    return (
        <div className={p.profile}>
            <ProfileInfo />
            <MyPosts posts={props.posts} />
        </div>
    );
}


export default Profile;