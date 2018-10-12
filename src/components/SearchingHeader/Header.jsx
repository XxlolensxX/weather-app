import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { connect } from 'react-redux';
import { setCity } from './../../actions/setCity';

import './styles.css';

class HeaderSearch extends Component {

    constructor(props){
        super(props);

        this.state = {
            value : ''
        }
    }
    
    handleChange = event => {
        //cuando se cambia el state con el input el valor inicial no puede ser null o undefined
        this.setState({
          value: event.target.value
        });
      }
    
    handleSubmit = event => {
        this.setState({
          city: this.state.value,
          value: ''
        });
        event.preventDefault();
        this.props.setCity(this.state.value);

      }    

    render(){
        return(
            <div className="WeatherAppHeader">
          <span className="WeatherAppLogo">Logo</span>
              
            <form onSubmit={this.handleSubmit} className="WeatherSearchInputCont">
              <span>x</span>
              <input 
              className="WeatherSearchInputText" 
              type="text" 
              //value={this.props.value} 
              name="search"
              onChange={this.handleChange.bind(this)}
              />
              <label className="WeatherSearchInputTextLabel" htmlFor="WeatherSearchInputText">Search</label>
              
              <button className="weatherButtonSearch" type="submit">
                <FaSearch />
              </button>
            </form>
            {/* <div className="suggestContainer">
                  <ul className="suggestUl">
                    <li className="suggestItem">Suggest 1</li>
                    <li className="suggestItem">Suggest 2</li>
                    <li className="suggestItem">Suggest 2</li>
                    <li className="suggestItem">Suggest 2</li>
                    <li className="suggestItem">Suggest 2</li>
                  </ul>
                  <img className="mentionLogo" src={poweredByGoogleLogo} alt={'powered by Google'}/>
              </div> */}
          </div>
        )
    }
};

const func1 = () => {};
const mapDispatchToProps = dispatch => ({
  setCity: payload => dispatch(setCity(payload))
});

const connectedHeaderSearch = connect(func1,mapDispatchToProps)(HeaderSearch);

export default connectedHeaderSearch;