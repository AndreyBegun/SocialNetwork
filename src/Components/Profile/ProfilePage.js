import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

import ProfileDataContainer from "./ProfileDataContainer";

const ProfilePage = (props) => {

    return (

        <div className={s.profilePage}>
            <div>
                <img src='http://novostrojka.by/upload/pic/760d0d546bed5eea4668e7e220c22d38.jpg' className={s.fon}
                     alt=''/>
            </div>

            <div className={s.userData}>
                <div>
                    <img src='https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg' className={s.avatar} alt=''/>

                </div>


                <ProfileDataContainer />
            </div>

            <MyPostsContainer/>
        </div>

    );
}

export default ProfilePage
