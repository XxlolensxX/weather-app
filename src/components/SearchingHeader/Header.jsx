import React, { Component } from 'react';

import './styles.css';

export default class HeaderSearch extends Component {

    constructor(){
        super();

        this.state = {
            value : null
        }
    }

    handleChange = event => {

        this.setState({
            value:event.target.value
        })
    } 

    render(){

        const { value } = this.state;

        return(
            <div className="WeatherAppHeader">
                <span className="WeatherAppLogo">Logo</span>
              
                    <div className="WeatherSearchInputCont">
                        <span>x</span>
                        <input 
                            className="WeatherSearchInputText" 
                            type="text" 
                            value={value} 
                            name="search"
                            onChange={this.handleChange.bind(this)}
                        />
                        <label className="WeatherSearchInputTextLabel" htmlFor="WeatherSearchInputText">Search</label>
                    </div>
              
            </div>
        )
    }
};