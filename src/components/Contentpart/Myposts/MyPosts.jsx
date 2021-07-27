import React from 'react';
import m from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addNewPost = () => {
        let postText = newPostElement.current.value;
        alert(postText);
    };

    return (
        <div className={m.my_posts}>
            <h2 className={m.my_posts_title} >My Posts</h2>
            <div className={m.text_area_input} >
                <textarea ref={newPostElement} type="text" placeholder='What is on your mind?'></textarea>
            </div>
            <div className={m.buttons}>
                <button onClick={addNewPost} className={m.my_posts_btn} >Post</button>
                <button className={m.my_posts_btn} >Cancel</button>
            </div>
            <Post posts={props.posts} />
        </div>
    );
}


export default MyPosts;