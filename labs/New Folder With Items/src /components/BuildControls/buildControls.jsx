import React from "react";
import css from "./buildcontrols.module.css";
import BuildControl from "../Buildcontrol/buildControl";

const Buildcontrols = (props)=>{
   return(
     <div className={css.BuildControls}>
         <p>Burger price :{props.price}</p>
        {Object.keys(props.ingredientNames).map(el=>(
            <BuildControl key={el} ortsNemeh = {props.ortsNemeh} disabled = {props.disabledIngredients} ortsHasah = {props.ortsHasah} type = {el} orts = {props.ingredientNames[el]}/>
        ))}
        <button 
        onClick={props.showConfirmOrder}
        className= {css.OrderButton}
        disabled = {props.disabled}>Захиалах</button>
    </div>
)
};

export default Buildcontrols;
