import React, { Component } from 'react';
import './Titlebar.css';

class Titlebar extends Component {
    render() {
        return (
            <div className="titlebar clearfix">
                <h1 dangerouslySetInnerHTML={{__html:this.props.title}}></h1>
                <div className="controls">
                    <span id="minimize">&#x2014;</span>
                    <span id="maximize">&#x2610;</span>
                    <span id="close">&#x2715;</span>
                </div>
            </div>
        );
    }
} 

export default Titlebar;