import React from "react";
import './css/Header.css'

//Functional component
class Header extends React.Component {
    constructor(){
        super();
        this.state={
            initValue : "User value" ,
        }
    }

      clickEvent = (e)=>{
        this.setState({initValue:e.target.value})
        this.props.datas(e.target.value);
    };
    render(){
        return (
            <div className="header">
                <h2>search product list</h2>
                <label htmlFor="search"></label>
                <input type="search" placeholder="Search" id="search" name="search" onChange={this.clickEvent}></input>
                <h3>{this.state.initValue}</h3>
            </div>
        )
    }
    

}

export default Header;