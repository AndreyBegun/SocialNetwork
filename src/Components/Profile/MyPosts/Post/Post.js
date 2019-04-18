import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src={props.urlAvaPhoto} alt=''/>
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>


    );
}

export default Post