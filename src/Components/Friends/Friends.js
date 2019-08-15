import React from 'react';
import {statuses} from "../../Reducers-BLL/FriendsReducer";

import { NavLink } from 'react-router-dom';

import {usersApi} from '../../DAL/api';

const Friends = (props) => {

    if (props.status === statuses.NOT_INITIALIZED) {
        props.setStatus(statuses.INPROGRESS)

        usersApi.getUsers().then((response) => {
                 props.setStatus(statuses.SUCCESS)
                 props.setUsers(response.items);
             })
    }
    if (!props.users.length) {
        return <div>Users not found</div>
    }

    return <div> {props.users.map(user => <div>
    
            <NavLink to={`/profile/${user.id}`}> 
            <img alt='' src={user.photos.small == null ? 'https:/via.placeholder.com/100' : user.photos.small}/>
            <span>{user.name}</span>
            <div>{user.status ? user.status : ' No status'}</div>
            </NavLink>
        </div>
    )
    }
    </div>
}

export default Friends
