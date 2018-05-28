import React, { Component } from 'react';
import './Titlebar.css';

class Titlebar extends Component {
    render() {
        return (
            <div className="titlebar clearfix">
                <h1>Test</h1>
                <div className="controls">
                    <span id="minimize">-</span>
                    <span id="maximize">o</span>
                    <span id="close">x</span>
                </div>
            </div>
        );
    }
}

export default Titlebar;