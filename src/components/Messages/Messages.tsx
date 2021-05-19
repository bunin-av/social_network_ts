import React from "react";
import Dialog from "./Dialog/Dialog";
import MessageInput from "./MessageInput/MessageInput";
import styles from './Messages.module.scss'
import {MessagesPageType} from "../../redux/state";


type MessagesType = {
    state: MessagesPageType
}

function Messages(props: MessagesType) {
    let messagesElements =
      props.state.messagesData.map((m: { text: string }) =>
        <Message messageText={m.text}/>)
    let dialogsElements =
      props.state.dialogsData.map((d: { id: number; userName: string; avaUrl: string }) =>
        <Dialog userId={d.id} userName={d.userName} avaUrl={d.avaUrl}/>)

    return (
      <div className={styles.messagesWrapper}>
          <div className={styles.searchBar}>Search Alex's messages</div>
          <div className={styles.dialogs}>
              {dialogsElements}
          </div>
          <div className={styles.messages}>
              {messagesElements}
              <MessageInput/>
          </div>
      </div>
    )
}


type MessagePropsType = {
    messageText: string;
}

function Message (props:MessagePropsType) {
    return <div className={styles.message}>{props.messageText}</div>
}

export default Messages