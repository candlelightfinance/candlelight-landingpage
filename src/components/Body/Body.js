import React, { Component } from 'react';
import "./Body.css";

class Body extends Component {

    render () {
        return(
            <div className='totalBody'>
                <div className='headline'>
                    <h1 className='text'>Candlelight Finance</h1>
                </div>
                <div className="candle">
                    <div className="flame">
                    <div className="shadows"></div>
                    <div className="top"></div>
                    <div className="middle"></div>
                    <div className="bottom"></div>
                </div>
                <div className="wick"></div>
                <div className="wax"></div>
                </div>
            </div>
        )
    }
}

export default Body
