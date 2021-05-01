import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from './Profile.module.scss'

export type postType = {
    id: number
    postText: string
    likesCount: number
    avatarUrl: string
    newPostText: string
}

export type postsDataType = Array<postType>

let postsData: postsDataType = [
    {id: 1, postText: "hihi!", likesCount: 0, avatarUrl: "", newPostText: ""},
    {id: 2, postText: "yoooo!", likesCount: 0, avatarUrl: "", newPostText: ""},
    {id: 3, postText: "Common guys!", likesCount: 0, avatarUrl: "", newPostText: ""},
]

const Profile = () => {
    return (
      <div className={styles.profile__wrapper}>
          <MyPosts postsData={postsData}/>
      </div>
    )
}

export default Profile