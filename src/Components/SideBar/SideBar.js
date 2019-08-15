import React from 'react';
import s from './SideBar.module.css';
import {NavLink} from "react-router-dom";

const SideBar = () => {

    return (
        <div className={s.sideBar}>
           
                <NavLink to='/' className={s.item} exact activeClassName={s.active}> Профиль</NavLink>
            
                <NavLink to='/dialogs' className={s.item} activeClassName={s.active}> Сообщения</NavLink>
            
                <NavLink to='/news' className={s.item} activeClassName={s.active}>Новости</NavLink>
            
                <NavLink to='/music' className={s.item} activeClassName={s.active}>Музыка</NavLink>
            
                <NavLink to='/settings' className={s.item} activeClassName={s.active}>Настройки</NavLink>
            
                <NavLink to='/login' className={s.item} activeClassName={s.active}>Авторизация</NavLink>
         
                <NavLink to='/friends' className={s.item} activeClassName={s.active}>IT-KAMASUTRA</NavLink>
            
                <NavLink to='/users' className={s.item} activeClassName={s.active}>Users</NavLink>
            
        </div>
    );
}

export default SideBar
