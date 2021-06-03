import React from "react";
import styles from "./Profile.module.scss"
import MyPosts from "./MyPosts/MyPosts";
import Wallpaper from "./Wallpaper/Wallpaper";
import Ava from "./Ava/Ava";
import Bio from "./Bio/Bio";
import {PropsType} from "../Content/Content";


function Profile(props: PropsType) {
    return (
        <div className={styles.content}>
            <Wallpaper/>
            <Ava/>
            <Bio/>
            <MyPosts
                state={props.state}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;