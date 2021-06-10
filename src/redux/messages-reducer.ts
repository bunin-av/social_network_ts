import {ActionsTypes, MessagesPageType, MessageType} from "./state"

const ADD_MESSAGE = "ADD_MESSAGE"
const ADD_NEW_MESSAGE_TEXT = "ADD_NEW_MESSAGE_TEXT"


export const messagesReducer = (state: MessagesPageType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageType = {
                id: new Date().getTime(),
                text: state.newMessageText
            }
            state.messagesData.push(newMessage)
            state.newMessageText = ''
            return state;
        case ADD_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text
            return state;
        default:
            return state
    }
}
export const addMessageAC = () => ({type: "ADD_MESSAGE"}) as const
export const addNewMessageTextAC = (text: string) => ({type: "ADD_NEW_MESSAGE_TEXT", text}) as const