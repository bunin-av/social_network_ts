import {postsDataType} from "../Profile";
import React from "react";
import styles from './MyPosts.module.scss'


const MyPosts = (props: { postsData: postsDataType }) => {
    let myPostsItems = props.postsData.map(posts => {
            return (
              <div className='Post-wrapper'>
                  <div>
                      <img src={posts.avatarUrl} alt="Avatar"/>
                  </div>
                  <div className='Post-postText'>
                      {posts.postText}
                  </div>
                  <div className='Post-likesCount'>
                      {posts.likesCount}
                  </div>
              </div>
            )
        })

    return (
      <div className={styles.MyPosts}>
          <div className={styles.MyPosts__inputItems}>
              <textarea className={styles.MyPosts__input} placeholder={'Tell them your news...'}/>
              <button className={styles.MyPosts__sendButton}/>
          </div>

          {myPostsItems}
      </div>
    )
}

export default MyPosts