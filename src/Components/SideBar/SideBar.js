import React from 'react';
import s from './SideBar.module.css';
import {NavLink} from "react-router-dom";

const SideBar = () => {

    return (
        <div className={s.sideBar}>
            <div className={s.item}>
                <NavLink to='/'> Профиль</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs'> Сообщения</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news'>Новости</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music'>Музыка</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='settings'>Настройки</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/login'>Авторизация</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/friends'>IT-KAMASUTRA</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users'>Users</NavLink>
            </div>
        </div>
    );
}

export default SideBar
