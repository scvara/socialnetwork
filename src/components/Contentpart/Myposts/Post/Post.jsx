import React from 'react';
import s from './../Post/Post.module.css'



const Post = (props) => {
    let postItem = props.posts.map(post => {
        return (
            <div className={s.post} >
                <div className={s.post_item}>
                    <div className={s.avatar}></div>
                    <div className={s.textofpost}>
                        {post.postmessage}
                    </div>
                </div>
                <div className={s.like_button}>
                    <button className={s.like}>{`${post.likeCounter} 👍 this`}</button>
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