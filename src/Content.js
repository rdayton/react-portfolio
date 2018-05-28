import React, { Component } from 'react';
import './Content.css';

function highlightSyntax(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
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
        //this.setState({isLoading:true})
        var API = "https://api.github.com/repos/rdayton/";        
        return fetch(API + this.props.view)
            .then(response => response.json())
            .then(data => this.setState({ data: data, isLoading: false }));
    }
    componentDidMount() {
        if(this.props.view !== "about")
        {
            this.loadData()
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.state.data === null) {
            // At this point, we're in the "commit" phase, so it's safe to load the new data.
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
                {this.props.view !== "about" && !this.state.isLoading &&
                    <div className="github">
                        <p className="description">{this.state.data.description}</p>
                        <p>For more information visit: <a href={"https://github.com/rdayton/" + this.props.view}>https://github.com/rdayton/{this.props.view}</a>.</p>
                        <pre dangerouslySetInnerHTML={{__html: highlightSyntax(JSON.stringify(this.state.data, null, 4))}}></pre>
                    </div>
                }                
            </div>
        )
    }
}
    
    
export default Content;