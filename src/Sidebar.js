import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {

    render() {
        return (
            <div className="sidebar">
                <div className="icon-wrap">
                    <ul>
                        <li><span className="icon icon-files-empty"></span></li>
                        <li><span className="icon icon-search"></span></li>
                        <li><span className="icon icon-code-fork"></span></li>
                        <li><span className="icon icon-bug"></span></li>
                        <li><span className="icon icon-power-cord"></span></li>
                        <li><span className="icon icon-cog"></span></li>
                    </ul>
                </div>
                <div className="details-wrap">
                    <div className="box">
                        <p>EXPLORER</p>
                    </div>
                    <div className="box open-files">
                        <p className="box-heading">OPEN EDITORS</p>
                        <ul><li onClick={() => this.props.changeView("about")} className="active"><span className="json">{"{ }"}</span>About.json</li></ul>
                    </div>
                    <div className="box open-files">
                        <p className="box-heading">PROJECTS</p>
                        <ul>
                            <li onClick={() => this.props.changeView("django-rest-framework-initial-setup")}><span  className="json">{"{ }"}</span>Django Rest Framework Init.py</li>
                            <li onClick={() => this.props.changeView("file-lister")}><span  className="json">{"{ }"}</span>File Lister.php</li>
                            <li onClick={() => this.props.changeView("react-portfolio")}><span  className="json">{"{ }"}</span>Portfolio.js</li>
                            <li onClick={() => this.props.changeView("round-ball-in-a-square-hole")}><span  className="json">{"{ }"}</span>Round Ball in a Square Hole.cs</li>
                       
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;