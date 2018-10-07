import React, { Component } from 'react';

import './styles.css';

export default class HeaderSearch extends Component {

    constructor(){
        super();

        this.state = {
            value : ''
        }
    }
    
    handleChange = event => {
        //cuando se cambia el state con el input el valor inicial no puede ser null o undefined
        this.setState({
            value:event.target.value
        })
    } 
    
    handleSubmit = event => {
        console.log(this.state.value);
        event.preventDefault();
    }

    render(){

        const { value } = this.state;
        return(
            <div className="WeatherAppHeader">
                <span className="WeatherAppLogo">Logo</span>
              
                    <form onSubmit={this.handleSubmit} className="WeatherSearchInputCont">
                        <span>x</span>
                        <input 
                            className="WeatherSearchInputText" 
                            type="text" 
                            value={value} 
                            name="search"
                            onChange={this.handleChange.bind(this)}
                        />
                        <label className="WeatherSearchInputTextLabel" htmlFor="WeatherSearchInputText">Search</label>
                    </form>  
            </div>
        )
    }
};