import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post/Post";
import {addNewPostTextAC, addPostAC} from "../../../redux/state";
import {PropsType} from "../../Content/Content";


function MyPosts(props: PropsType) {
    return (
        <div className={styles.MyPosts}>
            <h3>My posts</h3>
            <PostInput {...props}/>
            <PostsFeed {...props}/>
        </div>
    )
}


function PostInput(props: PropsType) {

    const addNewPostText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(addNewPostTextAC(e.currentTarget.value))
    }
    const addPost = () => {
        props.dispatch(addPostAC())
    }
    const addPostWithEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        e.key === 'Enter' && addPost()
    }


    return (
        <div className={styles.MyPosts__inputItems}>
            <div>
              <textarea
                  placeholder="Your news..."
                  className={styles.MyPosts__input}
                  value={props.state.profilePage.newPostText}
                  onChange={addNewPostText}
                  onKeyPress={addPostWithEnter}
              />
            </div>
            <div>
                <button
                    className={styles.MyPosts__sendButton}
                    onClick={addPost}
                >Send
                </button>
            </div>
        </div>
    )
}


function PostsFeed(props: PropsType) {
    let postElements = props.state.profilePage.postsData.map((p: { id: number; text: string; likes: number; }) =>
        <Post key={p.id} message={p.text} likes={p.likes}/>)

    return (
        <div>
            {postElements}
        </div>
    )
}

export default MyPosts;