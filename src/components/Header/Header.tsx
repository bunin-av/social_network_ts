import React from "react";
import styles from "./Header.module.scss"
import logo from "../../assets/images/logo-social.png"

function Header () {
  return <header className={styles.header}>
    <div className={styles.header__logo}>
      <img src={logo} alt="logo"/>
    </div>
  </header>
}

export default Header;