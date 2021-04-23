import './Post.css';
import React from 'react';
import Avatar from '@material-ui/core/Avatar';

function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar 
                    className="post__avatar"
                    alt="Tharindu"
                    src="/static/images/avatar/1.jpg"
                />
                <h3>UserName</h3>
            </div>
            <img className="post__image" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" alt="" />
            <h4 className="post__text"> <strong>tharindu</strong> Wow day </h4>
        </div>
    )
}

export default Post
 