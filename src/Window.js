import React, { Component } from 'react';
import Draggable from 'react-draggable';

import './Window.css';
import Titlebar from './Titlebar';
import Toolbar from './Toolbar';
import Sidebar from './Sidebar';
import Content from './Content';

class Window extends Component {

    constructor(props) {
        super(props)

        this.state = {
            view: "about", 
            title: "<span  class='json'>{ }</span>About.json"
        }
        this.changeView = this.changeView.bind(this)
    }

    changeView(title, view) {       
        this.setState({
            view: view, 
            title: title, 
        })
    }

    render() {
        return (
            <Draggable>
            <div className="window">
                <Titlebar title={this.state.title} />
                <Toolbar />
                <div id="contentContainer">
                    <Sidebar changeView = {this.changeView} />
                    <Content view={this.state.view} />
                </div>
            </div>
            </Draggable>
        );
    }
}

export default Window;