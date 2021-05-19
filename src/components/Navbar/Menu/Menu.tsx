import React from "react";
import {NavLink} from "react-router-dom";
import styles from '../Navbar.module.scss'

function Menu () {
    return (
      <div className={styles.menu}>
          <div className={styles.menu__elem}>
              <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
          </div>
          <div className={styles.menu__elem}>
              <NavLink to="/messages" activeClassName={styles.active}>Messages</NavLink>
          </div>
          <div className={styles.menu__elem}>
              <NavLink to="/news" activeClassName={styles.active}>News</NavLink>
          </div>
          <div className={styles.menu__elem}>
              <NavLink to="/music" activeClassName={styles.active}>Music</NavLink>
          </div>
          <div className={styles.menu__elem}>
              <NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink>
          </div>
      </div>
    )
}

export default Menu