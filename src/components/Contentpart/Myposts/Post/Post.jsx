import React from 'react';
import p from './../Post/Post.module.css'



const Post = (props) => {
    let postItem = props.posts.map((post) => {
        return (
            <div div className={p.post} >
                <div className={p.post_item}>
                    <div className={p.avatar}></div>
                    <div className={p.textofpost}>
                        {post.postmessage}
                    </div>
                </div>
                <div className={p.like_button}>
                    <button className={p.like}>{`👍 this ${post.likeCounter}`}</button>
                </div>
            </div>
        );
    });
    return (
        <div>
            {postItem}
        </div>

    );
}


export default Post;