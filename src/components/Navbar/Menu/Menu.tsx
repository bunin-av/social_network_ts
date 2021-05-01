import React from "react";
import {NavLink} from "react-router-dom";
import styles from '../Navbar.module.scss'

const Menu = () => {
    return (
      <>
          <li className={styles.menu__elem}>
              <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
          </li>
          <li className={styles.menu__elem}>
              <NavLink to="/messages" activeClassName={styles.active}>Messages</NavLink>
          </li>
          <li className={styles.menu__elem}>
              <NavLink to="/news" activeClassName={styles.active}>News</NavLink>
          </li>
          <li className={styles.menu__elem}>
              <NavLink to="/music" activeClassName={styles.active}>Music</NavLink>
          </li>
          <li className={styles.menu__elem}>
              <NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink>
          </li>
          <li className={styles.menu__elem}>
              <NavLink to="/find_friends" activeClassName={styles.active}>Find Friends</NavLink>
          </li>
      </>
    )
}

export default Menu