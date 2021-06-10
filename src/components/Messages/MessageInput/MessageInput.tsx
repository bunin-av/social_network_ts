import React from "react";

type MessageInput = {
    newMessageText: string
    addMessage: () => void
    addNewMessageText: (text: string) => void
}

function MessageInput(props: MessageInput) {
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.addNewMessageText(e.currentTarget.value)
    }
    const onEnterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        e.key === 'Enter' && props.addMessage()
    }

    return (
        <div>
            <textarea
                value={props.newMessageText}
                placeholder="Type your message..."
                onChange={onChange}
                onKeyPress={onEnterPress}
            />
            <div>
                <button onClick={props.addMessage}>Send</button>
            </div>
        </div>
    )
}

export default MessageInput