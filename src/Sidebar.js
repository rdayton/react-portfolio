import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {

    render() {
        return (
            <div className="sidebar">
                <div className="icon-wrap">
                    <ul>
                        <li onClick={(event) => this.props.changeView( "<span  class='icon json'>{ }</span>About.json", "about")} ><span className="icon icon-files-empty active"></span></li>
                        <li onClick={(event) => this.props.changeView( "<span  class='icon icon-amazon'></span>Amazon Web Services", "aws")}><span className="icon icon-amazon"></span></li>
                        <li onClick={(event) => this.props.changeView( "<span  class='icon icon-github'></span>Github", "github")}><span className="icon icon-github"></span></li>
                        <li onClick={(event) => this.props.changeView( "<span  class='icon icon-bug'></span>Bugs", "bugs")}><span className="icon icon-bug"></span></li>
                        <li onClick={(event) => this.props.changeView( "<span  class='icon icon-envelope-o'></span>Contact", "contact")}><span className="icon icon-envelope-o"></span></li>
                    </ul>
                </div>
                <div className="details-wrap">
                    <div className="box">
                        <p>EXPLORER</p>
                    </div>
                    <div className="box open-files">
                        <p className="box-heading">OPEN EDITORS</p>
                        <ul><li onClick={(event) => this.props.changeView( event.currentTarget.innerHTML, "about")}><span className="json">{"{ }"}</span>About.json</li></ul>
                    </div>
                    <div className="box open-files">
                        <p className="box-heading">PROJECTS</p>
                        <ul>
                            <li onClick={(event) => this.props.changeView(event.currentTarget.innerHTML,"django-rest-framework-initial-setup")}><span  className="icon icon-python"></span>Django Rest Framework Init.py</li>
                            <li onClick={(event) => this.props.changeView(event.currentTarget.innerHTML,"file-lister")}><span  className="icon icon-php"></span>File Lister.php</li>
                            <li onClick={(event) => this.props.changeView(event.currentTarget.innerHTML,"react-portfolio")}><span  className="icon icon-react"></span>Portfolio.js</li>
                            <li onClick={(event) => this.props.changeView(event.currentTarget.innerHTML,"round-ball-in-a-square-hole")}><span  className="icon icon-file-code-o"></span>Round Ball in a Square Hole.cs</li>
                       
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;