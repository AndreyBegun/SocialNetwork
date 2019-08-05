import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    
    
    return (

        <div className={s.notes}>
            <div>
                <textarea value={props.currentPostMessValue} onChange={(e) => {

                    props.changeCurrentPostValue(e.currentTarget.value)
                }} />
                <div>
                    <button onClick={props.addMessagePost}>
                        Отправить
                    </button>
                </div>
            </div>

            {
                props.posts.map((el, i) => {
                    return (
                        <Post key={i} urlAvaPhoto={el.urlAvaPhoto} message={el.message} likesCount={el.likesCount}/>
                    )
                })
            }
        </div>


    );
}

export default MyPosts
