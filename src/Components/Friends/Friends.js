import React from 'react';
import {statuses} from "./FriendsReducer";
import axios from "axios";

const Friends = (props) => {

    if (props.status === statuses.NOT_INITIALIZED) {
        props.setStatus(statuses.INPROGRESS)
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=30')
             .then((response) => {
                 props.setStatus(statuses.SUCCESS)
                 props.setUsers(response.data.items);
             })
    }
    if (!props.users.length) {
        return <div>Users not found</div>
    }
    return <div> {props.users.map(user => <div>

            <img alt='' src={user.photos.small == null ? 'https:/via.placeholder.com/100' : user.photos.small}/>
            <span>{user.name}</span>
            <div>{user.status ? user.status : '  No status'}</div>
        </div>
    )
    }
    </div>
}

export default Friends
