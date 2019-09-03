import React from "react";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import userPhoto from "../../assets//images/user-search.png";
import ProfileDataContainer from "./ProfileDataContainer";
import ProfileStatus from "./ProfileStatus";

const ProfilePage = (props) => {
 
 
  return (
    <div className={s.profilePage}>
      <div>
        <img
          src="http://novostrojka.by/upload/pic/760d0d546bed5eea4668e7e220c22d38.jpg"
          className={s.fon}
          alt=""
        />
      </div>

      <div className={s.userData}>
        <div>
        <img                        //"https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg"
            src= {props.profiles.photos.large !== null ? props.profiles.photos.small : userPhoto}                   
            className={s.avatar}
            alt=""
          />
          <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        </div>

        <ProfileDataContainer />
       </div>

      <MyPostsContainer />
    </div>
  );
};

export default ProfilePage;
