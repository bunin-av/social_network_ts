import {addNewPostTextAC, addPostAC, profileReducer} from "./profile-reducer";
import {addMessageAC, addNewMessageTextAC, messagesReducer} from "./messages-reducer";

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    friendsSidebar: Array<FriendSideType>
}

export type ProfilePageType = {
    postsData: Array<PostType>
    newPostText: string
}
export type PostType = {
    id: number
    text: string
    likes: number
}
export type MessagesPageType = {
    newMessageText: string
    messagesData: Array<MessageType>
    dialogsData: Array<DialogType>
}
export type MessageType = {
    id: number
    text: string
}
export type DialogType = {
    id: number
    userName: string
    avaUrl: string
}
export type FriendSideType = {
    id: number
    userName: string
    avaUrl: string
}

export type StoreType = {
    _state: StateType
    subscribe: (callback: () => void) => void
    _callSubscriber: (state: StateType) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}


export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof addNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof addNewMessageTextAC>

const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            postsData: [
                {id: 1, text: "Hi, man!", likes: 10},
                {id: 2, text: "It's my first app!", likes: 12},
                {id: 3, text: "Yo guys", likes: 12},
            ],
        },
        messagesPage: {
            newMessageText: '',
            messagesData: [
                {id: 1, text: "Hi, man"},
                {id: 2, text: "Hi, yo"},
                {id: 3, text: "Hi, ook"},
            ],
            dialogsData: [
                {
                    id: 1,
                    userName: "Andrey",
                    avaUrl: "https://astromix.net/ru/blog/wp-content/themes/yootheme/cache/taurus-460d9827.jpeg"
                },
                {
                    id: 2,
                    userName: "Lena",
                    avaUrl: "https://img.freepik.com/free-photo/young-and-beautiful-woman-in-pink-warm-sweater-natural-look-smiling-portrait-on-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.2.1377952299.1616630400"
                },
                {
                    id: 3,
                    userName: "Maria",
                    avaUrl: "https://st2.depositphotos.com/2923991/10508/i/600/depositphotos_105089962-stock-photo-a-smiling-young-woman.jpg"
                },
                {
                    id: 4,
                    userName: "Pavel",
                    avaUrl: "https://videozhara.com/storage/xhp6gfqVvUbp0DYMxBic3rlDvh85C4xYAJZNX3vI.jpeg"
                },
            ],
        },
        friendsSidebar: [
            {
                id: 1,
                userName: "Andrey",
                avaUrl: "https://astromix.net/ru/blog/wp-content/themes/yootheme/cache/taurus-460d9827.jpeg"
            },
            {
                id: 2,
                userName: "Lena",
                avaUrl: "https://img.freepik.com/free-photo/young-and-beautiful-woman-in-pink-warm-sweater-natural-look-smiling-portrait-on-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.2.1377952299.1616630400"
            },
            {
                id: 3,
                userName: "Maria",
                avaUrl: "https://st2.depositphotos.com/2923991/10508/i/600/depositphotos_105089962-stock-photo-a-smiling-young-woman.jpg"
            },
        ]
    },
    subscribe(callback) {
        this._callSubscriber = callback
    },
    _callSubscriber() {
        console.log('state is changed')
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._callSubscriber(this._state)
    },
}


export default store;

declare global {
    interface Window {
        store: any
    }
}

window.store = store