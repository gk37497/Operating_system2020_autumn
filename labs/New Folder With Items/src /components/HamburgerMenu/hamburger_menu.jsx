import React from 'react';
import css from "./hamburger_menu.module.css"

const HamburgerMenu = (props)=>(
    <div onClick = {props.toggle} className = {css.HamburgerMenu}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default HamburgerMenu;