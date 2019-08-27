import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logOut, getAuthUserData} from "../../Reducers-BLL/AuthReducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
    }
    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    userInfo: state.auth.userInfo,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {getAuthUserData, logOut})(HeaderContainer);
