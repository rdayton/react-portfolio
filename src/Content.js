import React, { Component } from 'react';
import './Content.css';
import aws from "./AWS_Certified_Logo_SAA_588x300_White.png";
import saa from "./AWS_Certified_Tag__SAA_588x300-White.png";
import sysops from "./AWS_Certified_Tag__SOA_588x300-White.png";
import dev from "./AWS_Certified_Tag__DVA_588x300-White.png"

function highlightSyntax(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

class Content extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: null,
          isLoading: false,
          previousView: props.view,
        };
    }

    loadData() {
        var API = "https://api.github.com/repos/rdayton/";        
        return fetch(API + this.props.view)
            .then(response => response.json())
            .then(data => this.setState({ data: data, isLoading: false }));
    }
    componentDidMount() {
        if(this.props.view !== "about" && this.props.view !== "github" && 
        this.props.view !== "bugs" && this.props.view !== "contact"
        && this.props.view !== "aws")
        {
            this.loadData()
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.state.data === null) {
            this.loadData();
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {

        if(nextProps.view !== prevState.previousView)
        {
            return {
                isLoading: true,
                previousView: nextProps.view, 
                data: null,              
            }
        }

        return null;
    }


    render() {        
     
        
        return (
            <div className="content">
                {this.state.isLoading && <p>Loading ...</p>}
                {this.props.view === "about" && !this.state.isLoading &&
                    <div className="tab"><span className="json">{"{ }"}</span>About.json</div>
                }   
                {this.props.view !== "about" && 
                    !this.state.isLoading && 
                    this.props.view !== "github" && 
                    this.props.view !== "bugs" &&
                    this.props.view !== "contact" &&
                    this.props.view !== "aws" &&
                    <div className="github">                    
                        <p className="description">{this.state.data.description}</p>
                        <p>For more information visit: <a href={"https://github.com/rdayton/" + this.props.view}>https://github.com/rdayton/{this.props.view}</a>.</p>
                        <pre dangerouslySetInnerHTML={{__html: highlightSyntax(JSON.stringify(this.state.data, null, 4))}}></pre>
                    { this.state.data.toString().includes("rate limit exceeded") &&
                        <p className="comment">// TODO: fix rate limit exceeded error</p>
                    }
                    </div>
                }   
                {this.props.view === "aws" &&
                    <div className="certifications">
                        <img className="certification-banner" src={aws} alt="AWS Certified" />
                        <a href="https://aw.certmetrics.com/amazon/public/verification.aspx?code=B6MP74G2BNQQQBSC" target="_blank" rel="noopener noreferrer" ><img className="certification-image" src={saa} alt="AWS Solutions Architect Associate"/></a>
                        <a href="https://aw.certmetrics.com/amazon/public/verification.aspx?code=8S4FJWWKJ2VE1RK8" target="_blank" rel="noopener noreferrer" ><img className="certification-image" src={dev} alt="AWS Developer Associate" /></a>
                        <a href="https://aw.certmetrics.com/amazon/public/verification.aspx?code=5B78NBECLFE11MGZ" target="_blank" rel="noopener noreferrer"><img className="certification-image" src={sysops} alt="AWS SysOps Associate" /></a>
                        <p className="announcement">Pro level certifications coming soon.</p>
                    </div>
                }  
                {this.props.view === "github" &&
                    <p className="announcement">Github repositories available at <a href="https://github.com/rdayton" target="_blank" rel="noopener noreferrer">https://github.com/rdayton</a></p>
                }  
                {this.props.view === "bugs" &&
                    <p className="comment">// TODO: add some weird bug stuff</p>
                }  
                {this.props.view === "contact" &&
                    <p className="comment">// TODO: add a contact form.  For business inquiries please contact me at <a href="mailto:robertcdayton@gmail.com">robertcdayton@gmail.com</a>.</p>
                }             
            </div>
        )
    }
}
    
    
export default Content;