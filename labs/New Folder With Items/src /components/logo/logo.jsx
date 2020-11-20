import React from 'react';
import css from "./logo.module.css"
import LogoImage from "../../assets/images/burger.png"
const Logo = (props)=>(
    <div className = {css.Logo}>
        <img src={LogoImage} alt=""/>
    </div>
)
export default Logo;