import React from 'react';

const ProfileData = (props) => {

    return (
        <div>
            <div>Имя пользователя: {props.profileData.fullName}</div>
            {/* <div>День рождения: {birthDay}</div> */}
            <div>Ищу работу: {props.profileData.lookingForAJob}</div>
            <div>Обо мне: {props.profileData.aboutMe}</div>
            <div>ID: {props.profileData.userId}</div>
        </div>
    )
}

export default ProfileData
