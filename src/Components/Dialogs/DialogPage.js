import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialogs + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div><img src={props.src} alt=''/>{props.message}</div>
    )
}

const DialogPage = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {
                    props.dialogsPage.dialogsItem.map((el, i) => {
                        return (
                            <DialogItem key={i} name={el.name} id={el.id}/>
                        )
                    })
                }
            </div>
            <div className={s.mesages}>
                <div>
                    <textarea value={props.dialogsPage.currentDialogMessValue}
                              onChange={(e) => props.changeCurrentDialog(e)}>
                    </textarea>
                    <button onClick={() => props.addMessageDialog(props.dialogsPage.currentDialogMessValue)}>Добавить сообщение
                    </button>
                </div>
                {
                    props.dialogsPage.dialogMessage.map((el, i) => {
                        return (
                            <Message key={i} message={el.message} src={el.urlFoto}/>
                        )
                    })
                }
            </div>
        </div>
    );
}


export default DialogPage;
