import React, { Component } from 'react';

import './styles.css';

export default class Skeleton extends Component {
    render(){
        return(
            <div className="skeletonContainer">
                <div className="cont">
                    <div className="skeletonH1"></div>
                    <div className="skeletonP"></div>
                    <div className="skeletonH2"></div>
                </div>
                <div className="cont flexBetween">
                    <div className="squareImg"></div>
                    <div className="squareImg"></div>
                </div>
                <div className="cont">
                    <div className="roundImg"></div>
                    <div className="roundImg"></div>
                    <div className="roundImg"></div>
                    <div className="roundImg"></div>
                    <div className="roundImg"></div>
                    <div className="roundImg"></div>
                </div>
                <div className="secondaryContent"></div>
            </div>
        )
    }
}