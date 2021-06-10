import {ActionsTypes, PostType, ProfilePageType} from "./state"

const ADD_POST = "ADD_POST"
const ADD_NEW_POST_TEXT = "ADD_NEW_POST_TEXT"


export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                text: state.newPostText,
                likes: 0,
            }
            state.postsData.unshift(newPost)
            state.newPostText = ''
            return state
        case ADD_NEW_POST_TEXT:
            state.newPostText = action.text
            return state
        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST}) as const
export const addNewPostTextAC = (text: string) => ({type: ADD_NEW_POST_TEXT, text}) as const