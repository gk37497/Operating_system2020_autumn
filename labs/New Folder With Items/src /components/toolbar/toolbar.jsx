import React from "react";
import styles from "./toolbar.module.css"
import Logo from "../logo/logo"
import Menu from "../Menu/menu"
import HamburgerMenu from "../HamburgerMenu/hamburger_menu";
const Toolbar = (props)=>(
    <header className = {styles.Toolbar}>
        <HamburgerMenu toggle = {props.toggle}/>
        <div> .... </div>
        <Logo/>
        <nav className = {styles.hideOnMobile}>
            <Menu/>
        </nav>
    </header>
)
export default Toolbar;