import styles from './FriendsSidebar.module.scss';
import React from "react";
import {FriendSideType} from "../../../redux/state";


type FriendsSidebarType = {
    state: Array<FriendSideType>
}

function FriendsSidebar (props:FriendsSidebarType) {
    let friendElements = props.state.map((f: { id: number; avaUrl: string; userName: string; }) =>
        <div key={f.id}>
            <div className={styles.userAva}>
                <img src={f.avaUrl} alt=""/>
            </div>
            <div className={styles.friendName}>{f.userName}</div>
        </div>)

    return (
      <div className={styles.friends}>
          <h3>Friends</h3>
          {friendElements}
      </div>
    )
}


export default FriendsSidebar