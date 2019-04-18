import React from 'react';

const ProfileData = (props) => {
    let {userName, birthDay} = props.profileData;
    return (
        <div>
            <div>Имя пользователя: {userName}</div>
            <div>День рождения: {birthDay}</div>
            <div>Город: {props.profileData.city}</div>
            <div>Образование: {props.profileData.aducation}</div>
            <div>Веб сайт: {props.profileData.webSite}</div>
        </div>
    )
}

export default ProfileData
