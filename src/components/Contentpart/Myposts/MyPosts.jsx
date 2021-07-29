import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {


    let newPostElement = React.createRef();

    let addNewPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        // newPostElement.current.value = '';
    };

    return (
        <div className={s.my_posts}>
            <h2 className={s.my_posts_title} >My Posts</h2>
            <div className={s.text_area_input} >
                <textarea ref={newPostElement} type="text" placeholder='What is on your mind?'></textarea>
            </div>
            <div className={s.buttons}>
                <button onClick={addNewPost} className={s.my_posts_btn} >Post</button>
                <button className={s.my_posts_btn} >Cancel</button>
            </div>
            <Post posts={props.posts} />
        </div>
    );
}


export default MyPosts;