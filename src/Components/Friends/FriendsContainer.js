
import {connect} from 'react-redux';
import Friends from "./Friends";
import {setStatus, setUsers} from "../../Reducers-BLL/FriendsReducer";

let mapStateToProps = (state) => {
    return {
        users: state.friends.users,
        status: state.friends.status,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            let action = setUsers(users);
            dispatch(action);
        },
        setStatus: (status) => {
            let action = setStatus(status);
            dispatch(action);
        }
    }
};
let FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer
