import React from 'react';
import s from './../Contentpart/Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './Myposts/MyPosts';

const Profile = (props) => {

    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts posts={props.posts}
                    addPost={props.addPost}
                    newPostText={props.newPostText}
                    updateNewPostText={props.updateNewPostText} />
        </div>
    );
}


export default Profile;