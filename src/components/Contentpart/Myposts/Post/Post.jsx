import React from 'react';
import p from './../Post/Post.module.css'

const Post = () => {
    return (
        <div className={p.post}>
            <div className={p.post_item}>
                <div className={p.avatar}></div>
                <div className={p.textofpost}>
                    Hello World!
                    (28:5) start value has mixed support, consider using flex-start instead
                    (28:5) start value has mixed support, consider using flex-start instead
                    Hello
                </div>
            </div>
            <div className={p.like_button}>
                <button className={p.like}>👍 this</button>
            </div>
        </div>
    );
}


export default Post;