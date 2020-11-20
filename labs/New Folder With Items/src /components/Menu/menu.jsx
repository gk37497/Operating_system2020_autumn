import React from 'react';
import css from "./menu.module.css"
import MenuItem from "../MenuItem/menu_item"

const Menu = (props)=>(
    <div >
        <ul className = {css.Menu}>
                <MenuItem active link = "/">New order</MenuItem>
                <MenuItem link = "/checkout">Log in</MenuItem>
        </ul>
    </div>
)
export default Menu;    