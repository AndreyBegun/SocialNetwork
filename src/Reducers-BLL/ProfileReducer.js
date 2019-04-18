
let initialStateForProfiles = {

    currentPostMessValue: '',

    posts: [
        {
            id: 1,
            urlAvaPhoto: 'https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg',
            message: 'Hi, how are you?',
            likesCount: '12'
        },
        {
            id: 2,
            urlAvaPhoto: 'https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg',
            message: 'It\'s my first post',
            likesCount: '23'
        }
    ],
    profiles: {
        userName: 'Andruha',
        birthDay: '12.08.1984',
        city: 'Minsck',
        aducation: 'higher',
        webSite: 'drunya35@gmail.com'
    },
}


const ProfileReducer = (state = initialStateForProfiles, action) => {
    let copyState = {...state}

    switch (action.type) {
        case 'ADD_MESSAGE_POSTS':

            copyState.posts.unshift({
                message: copyState.currentPostMessValue,
                urlAvaPhoto: 'https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg',
                likesCount: 0
            });
            copyState.currentPostMessValue = '';
            return copyState;


        case 'CHANGE_CURRENT_POST_MESSAGE':

            copyState.currentPostMessValue = action.postMessage;
            return copyState;
        default:
            return state;
    }
}
export default ProfileReducer;
