
let initialStateForDialog = {
    currentDialogMessValue: '',
    dialogsItem: [
        {
            name: 'Dimich',
            id: '1'
        },
        {
            name: 'Andrey',
            id: '2'
        },
        {
            name: 'Sveta',
            id: '3'
        }
    ],
    dialogMessage: [
        {
            id: '1',
            message: 'Hi',
            urlFoto: 'https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg'
        },
        {
            id: '2',
            message: 'how are you?',
            urlFoto: 'https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg'
        },
        {
            id: '3',
            message: 'yo it-camasutra!',
            urlFoto: 'https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg'
        }
    ]
}
export const addMessageDialogAction = (newMessageBody) => {
    return {
        type: 'ADD_MESSAGE_DIALOGS',
        message: newMessageBody
    }
}
const DialogsReducer = (state = initialStateForDialog, action) => {
    let copyState = {
        ...state,
        dialogMessage: [...state.dialogMessage]
    };

    switch (action.type) {
        case 'ADD_MESSAGE_DIALOGS':

            copyState.dialogMessage.unshift({
                message: action.message,
                urlFoto: 'https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg'
            });
            return copyState;
        default:
            return state;
    }
}
export default DialogsReducer;


