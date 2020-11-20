import React from 'react';
import css from "./sidebar.module.css"
import Logo from "../logo/logo"
import Menu from "../Menu/menu"
import Shadow from '../shadow/shadow';
const Sidebar = (props)=>{
    let classes = [css.Sidebar , css.Close];
    if(props.showSideBar){
        classes = [css.Sidebar , css.Open];
    }
    return(
        <div>
            <Shadow  OnClick = {props.toggleSideBar} show = {props.showSideBar }/>
            <div className = {classes.join(" ")}>
                <div className = {css.Logo}>
                    <Logo/>
                </div>
                <Menu/>
            </div>
        </div>

    )
}

export default Sidebar;