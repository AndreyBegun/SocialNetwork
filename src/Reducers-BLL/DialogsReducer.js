

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


const DialogsReducer = (state = initialStateForDialog, action) => {
    let copyState = {...state};

    switch (action.type) {
        case 'ADD_MESSAGE_DIALOGS':

            copyState.dialogMessage.unshift({
                message: action.message,
                urlFoto: 'https://i.ytimg.com/vi/ToNcTEAEUqo/maxresdefault.jpg'
            });
            copyState.currentDialogMessValue = '';
            return copyState;

        case 'CHANGE_CURRENT_DIALOG_MESSAGE':

            copyState.currentDialogMessValue = action.dialogMessage;

            return copyState;
        default:
            return state;


    }
}

export default DialogsReducer;

export const changeCurrentDialogAction = (dialogMessage) => {
    return {
        type: 'CHANGE_CURRENT_DIALOG_MESSAGE',
        dialogMessage: dialogMessage
    }
}

export const addMessageDialogAction = (message) => {
    return {
        type: 'ADD_MESSAGE_DIALOGS',
        message: message
    }
}
