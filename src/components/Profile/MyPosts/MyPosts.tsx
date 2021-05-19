import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";

type PostsPropsType = {
    state: ProfilePageType
    addPost: () => void
    addNewPostText: (text: string) => void
}

function MyPosts(props: PostsPropsType) {
    return (
      <div className={styles.MyPosts}>
          <h3>My posts</h3>
          <PostInput {...props}/>
          <PostsFeed {...props}/>
      </div>
    )
}


function PostInput(props: PostsPropsType) {
    // let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addNewPostText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.addNewPostText(e.currentTarget.value)
    }
    const addPost = () => {
        props.addPost()
    }
    const addPostWithEnter = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        e.key === 'Enter' && props.addPost()
    }


    return (
      <div className={styles.MyPosts__inputItems}>
          <div>
              <textarea placeholder="Your news..."
                        className={styles.MyPosts__input}
                        value={props.state.newPostText}
                        onChange={addNewPostText}
              />
          </div>
          <div>
              <button className={styles.MyPosts__sendButton}
                      onClick={addPost}
                      onKeyPress={addPostWithEnter}
              >Send
              </button>
          </div>
      </div>
    )
}


function PostsFeed(props: PostsPropsType) {
    let postElements = props.state.postsData.map((p: { id: number; text: string; likes: number; }) =>
      <Post key={p.id} message={p.text} likes={p.likes}/>)

    return (
      <div>
          {postElements}
      </div>
    )
}

export default MyPosts;