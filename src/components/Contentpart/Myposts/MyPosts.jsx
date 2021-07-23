import React from 'react';
import m from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div className={m.my_posts}>
            <h2 className={m.my_posts_title} >My Posts</h2>
            <div className={m.text_area_input} >
                <input type="text" placeholder='Enter your text' />
            </div>
            <div className={m.buttons}>
                <button className={m.my_posts_btn} >Send</button>
                <button className={m.my_posts_btn} >Cancel</button>
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}


export default MyPosts;