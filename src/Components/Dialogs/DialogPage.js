import React from 'react';
import s from './Dialogs.module.css';
import FriendsContainer from '../Friends/FriendsContainer';
import { Field, reduxForm } from 'redux-form'



const Message = (props) => {
    return (
        <div><img src={props.src} alt='' />{props.message}</div>
    )
}

const DialogPage = (props) => {

    let addNewMessage = (values) => {
        props.addMessageDialog(values.newMessageBody)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>

                <FriendsContainer />

            </div>
            <div className={s.mesages}>
                <AddMessageFormRedux onSubmit={addNewMessage} />

                {
                    props.dialogsPage.dialogMessage.map((el, i) => {
                        return (
                            <Message key={i} message={el.message} src={el.urlFoto} />
                        )
                    })
                }
            </div>
        </div>
    );
}
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='newMessageBody' placeholder='Enter your message' />
            <button >Добавить сообщение</button>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)
export default DialogPage;
