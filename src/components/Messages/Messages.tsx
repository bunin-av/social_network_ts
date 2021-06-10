import React from "react";
import Dialog from "./Dialog/Dialog";
import MessageInput from "./MessageInput/MessageInput";
import styles from './Messages.module.scss'
import {ActionsTypes, MessagesPageType} from "../../redux/state";
import {addMessageAC, addNewMessageTextAC} from "../../redux/messages-reducer";


type MessagesType = {
    state: MessagesPageType
    dispatch: (action: ActionsTypes) => void
}

function Messages(props: MessagesType) {
    const addMessage = () => props.dispatch(addMessageAC())
    const addNewMessageText = (text: string) => props.dispatch(addNewMessageTextAC(text))


    let messagesElements = props.state.messagesData.map((m: { text: string }) =>
        <Message messageText={m.text}/>)
    let dialogsElements = props.state.dialogsData.map((d: { id: number; userName: string; avaUrl: string }) =>
        <Dialog userId={d.id} userName={d.userName} avaUrl={d.avaUrl}/>)

    return (
        <div className={styles.messagesWrapper}>
            <div className={styles.searchBar}>Search Alex's messages</div>
            <div className={styles.dialogs}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
                <MessageInput
                    newMessageText={props.state.newMessageText}
                    addMessage={addMessage}
                    addNewMessageText={addNewMessageText}
                />
            </div>
        </div>
    )
}


type MessagePropsType = {
    messageText: string;
}

function Message(props: MessagePropsType) {
    return <div className={styles.message}>{props.messageText}</div>
}

export default Messages