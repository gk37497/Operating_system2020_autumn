import React from 'react';
import Button from '../Button/Button';
import css from "./orderSummary.module.css";
const OrderSummary = (props)=>{
    return(
        <div className = {css.OrderSummary}>
            <h3>Таны захиалга</h3>
            <p><strong>Таны захиалсан орцууд</strong></p>
            <ul>
                {Object.keys(props.ingredients).map(el=>
                <li>
                    {props.ingredientNames[el]} : {props.ingredients[el]}
                </li>)}
            </ul>
            <p><strong>Захиалгын дүн : {props.price}</strong> </p>
            <p>contininue?</p>
            <Button clicked = {props.onCancel} btnType = "Danger" text = " Татгалзах"/>
            <Button clicked = {props.onContinue} btnType = "Success" text = "Үргэлжлүүлэх"/>
        </div>
    )
}

export default OrderSummary;