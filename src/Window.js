import React, { Component } from 'react';
import './Window.css';
import Titlebar from './Titlebar';
import Toolbar from './Toolbar';
import Sidebar from './Sidebar';
import Content from './Content';

class Window extends Component {

    constructor(props) {
        super(props)

        this.state = {
            view: "about"
        }
        this.changeView = this.changeView.bind(this)
    }

    changeView(view) {   
        console.log(view)     
        this.setState({
            view: view 
        })
    }

    render() {
        return (
            <div className="window">
                <Titlebar />
                <Toolbar />
                <div id="contentContainer">
                    <Sidebar changeView = {this.changeView} />
                    <Content view={this.state.view} />
                </div>
            </div>
        );
    }
}

export default Window;