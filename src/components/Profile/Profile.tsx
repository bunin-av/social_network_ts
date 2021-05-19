import React from "react";
import styles from "./Profile.module.scss"
import MyPosts from "./MyPosts/MyPosts";
import Wallpaper from "./Wallpaper/Wallpaper";
import Ava from "./Ava/Ava";
import Bio from "./Bio/Bio";
import {ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    state: ProfilePageType
    addPost: () => void
    addNewPostText: (text:string) => void
}

function Profile (props:ProfilePropsType) {
    return (
      <div className={styles.content}>
          <Wallpaper/>
          <Ava/>
          <Bio/>
          <MyPosts state={props.state}
                   addPost={props.addPost}
                   addNewPostText={props.addNewPostText}
          />
      </div>
    )
}

export default Profile;