import React from 'react'
import css from "./modal.module.css"
import Shadow from "../shadow/shadow"

const Modal = props => (
    <div>
           <Shadow show = {props.show} OnClick = {props.closeConfirmOrder}/>
    <div 
        style = {{transform:props.show ? "translateY(0)" : "translateY(-100vh)",opacity:props.show ? "1" : "0"}}
        className = {css.Modal}>
    {props.children}</div>
    </div>
)


export default Modal;