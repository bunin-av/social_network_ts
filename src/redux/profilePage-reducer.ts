const ADD_NEW_POST = 'ADD_NEW_POST'

export type postType = {
    id: number
    postText: string
    likesCount: number
    avatarUrl: string
    newPostText: string
}

type myPostsType = Array<postType>

let initialState = {
    myPosts: [
        {id: 1, postText: "hihi!", likesCount: 0, avatarUrl: "", newPostText: ""},
        {id: 2, postText: "hihi!", likesCount: 0, avatarUrl: "", newPostText: ""},
        {id: 3, postText: "hihi!", likesCount: 0, avatarUrl: "", newPostText: ""},
    ],
    newText: '',
}


const profilePageReducer = (state = initialState, action: { type: string; newText: string }) => {
    switch (action.type) {
        case ADD_NEW_POST:
            return {
                ...state,
                myPosts: [...state.myPosts, action.newText],
            }


    }
}

const addNewPost = (newText: string) => ({type: ADD_NEW_POST, newText})



