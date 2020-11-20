import React, { Component } from "react";
import styles from "./burgerBuilder.module.css";
import Burger from "../../components/Burger/burger"
import BuildControls from "../../components/BuildControls/buildControls"
import Modal from "../../components/modal/modal"
import OrderSummary from "../../components/orderSummary/orderSummary";
import axios from "../../axios-orders";
const ingredientPrice = { salad: 500, bacon: 250, meat: 300, cheese: 200 };
const ingredientNames = {
    salad:"Салад",
    bacon:"Гахайн мах",
    meat:"Үхрийн мах",
    cheese:"Бяслаг"
}
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 1000,
        purchasing: false,
        confirmOrder:false,
    };

    componentDidMount = ()=>{
        axios.get("/orders.json").then(response =>{
            const arr = Object.entries(response.data);
            arr.forEach(el =>{
                console.log(el[1].hayag.name + "===>" + el[1].dun)
            })
        })
    }
    showConfirmOrder = ()=>{
        this.setState({confirmOrder : true})
    }
    closeConfirmOrder = ()=>{
        this.setState({confirmOrder : false})
    }
    ContinueOrder = ()=>{
        const order = {
            orts : this.state.ingredients,
            dun : this.state.totalPrice,
            hayag : {
                name : "Anar",
                city : "Ulaanbaatar",
                street : "2:23"
            }
        }
        axios.post("/orders.json" , order).then(response => alert("amjilttai"));
    }
    ortsNemeh = (type) => {
        // this.setState(this.state.ingredients.{type}.)
        const newIngredients = { ...this.state.ingredients }
        newIngredients[type]++;
        const newPrice = this.state.totalPrice + ingredientPrice[type];
        this.setState({ purchasing: true, totalPrice: newPrice, ingredients: newIngredients });
    }
    ortsHasah = (type) => {
        const newIngredients = { ...this.state.ingredients }
        newIngredients[type]--;
        const newPrice = this.state.totalPrice - ingredientPrice[type];
        this.setState({ disabledIngredient : this.state.ingredients[type] > 0, purchasing: newPrice > 1000, totalPrice: newPrice, ingredients: newIngredients });

    }
    render() {
        const disabledIngredients = {...this.state.ingredients};
        for(let key in disabledIngredients) {
            disabledIngredients[key] = disabledIngredients[key] <= 0;
        }
        
        return (
            <div className={styles.BurgerIngredients}>
                <Modal closeConfirmOrder = {this.closeConfirmOrder} show = {this.state.confirmOrder}>
                   <OrderSummary 
                    onCancel = {this.closeConfirmOrder} 
                    onContinue = {this.ContinueOrder}
                    ingredientNames = {ingredientNames} ingredients = {this.state.ingredients} price = {this.state.totalPrice}/>
                </Modal>
                <Burger orts={this.state.ingredients} />
                <BuildControls 
                showConfirmOrder = {this.showConfirmOrder}
                disabledIngredients = {disabledIngredients}
                ingredientNames = {ingredientNames}
                disabled={!this.state.purchasing} 
                price={this.state.totalPrice} 
                ortsNemeh={this.ortsNemeh} 
                ortsHasah={this.ortsHasah} />
            </div>

        );
    }
}

export default BurgerBuilder;
