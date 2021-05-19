import React from "react";
import styles from "./Post.module.scss"

type PostPropsType = {
    message: string,
    likes: number
}

function Post(props: PostPropsType) {
    return (
      <div className={styles.Post}>
          <img
            src="http://sun9-44.userapi.com/s/v1/if1/qw3vWR63rnWIPexrEErujILvop-GpxX8MJRJx1emFNrgy2Ve9Hf3sqh5NLHETJNtyNMxaiTe.jpg?size=200x0&quality=96&crop=18,0,586,594&ava=1"
            alt=""/>
          {props.message}
          <div>
              <img src="https://www.iconpacks.net/icons/2/free-instagram-like-icon-3507-thumb.png" alt=""/>
          </div>
          <div>
              {props.likes}
          </div>
      </div>
    )
}

export default Post;