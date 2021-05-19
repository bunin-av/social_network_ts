import React from "react";
import styles from "./Navbar.module.scss"
import FriendsSidebar from "./FriendsSidebar/FriendsSidebar";
import {StateType} from "../../redux/state";
import Menu from "./Menu/Menu";

type NavbarType = {
    state: StateType
}

function Navbar(props: NavbarType) {
    return (
      <nav className={styles.navbar}>
          <Menu/>
          <FriendsSidebar state={props.state.friendsSidebar}/>
      </nav>
    )
}

export default Navbar;