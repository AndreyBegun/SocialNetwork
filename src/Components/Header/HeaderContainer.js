import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logOut, me} from "../../Reducers-BLL/AuthReducer";


class HeaderContainer extends React.Component {
    componentWillMount() {
        this.props.me()
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    userInfo: state.auth.userInfo,
    isAuth: state.auth.isAuth
});

let mapDispatchToProps = (dispatch) => ({
    me: () => {
        dispatch(me())
    },
    logOut: () => {
        dispatch(logOut())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
