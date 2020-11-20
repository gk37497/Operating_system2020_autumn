import React, { Component } from 'react';
import './App.css';
import BurgerBuilder from "../BurgerBuilder/burgerBuilder";
import Toolbar from "../../components/toolbar/toolbar.jsx";
import Sidebar from '../../components/sidebar/sidebar';

class App extends Component{
  state={
    showSideBar:false
  };
  toggleSideBar = ()=>{
    this.setState(prevState=>{
      return {showSideBar : !prevState.showSideBar};
    });
  }
  render(){
    return (
      <div>
      <Toolbar toggle = {this.toggleSideBar}/>
      <Sidebar showSideBar = {this.state.showSideBar} toggleSideBar = {this.toggleSideBar}/>
      <main>
        <BurgerBuilder/>
      </main>
    </div>
    )
  }
}

export default App;
