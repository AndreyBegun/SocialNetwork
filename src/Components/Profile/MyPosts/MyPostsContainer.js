
import MyPosts from './MyPosts';
import {connect} from "react-redux";

let mapStateToProps = (state)=>{
    return {
        currentPostMessValue: state.profilePage.currentPostMessValue,
        posts: state.profilePage.posts
    }
};
let mapDispatchToProps = (dispatch) => {

    return {
        changeCurrentPostValue(postMessage) {
            dispatch({
                type: 'CHANGE_CURRENT_POST_MESSAGE',
                postMessage
            })
        },
        addMessagePost(){
            dispatch({
                type: 'ADD_MESSAGE_POSTS'
            });
        }
    }
};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer
