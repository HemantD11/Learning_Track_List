import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state={hasError:false}
    }
    static getDerivedStateFromError(error){
        return {hasError:true}
    }
    
    render() {
        if(this.state.hasError){
            return <h1>Some Error in the Application</h1>
        }
        return this.props.children;
        
    }
}

export default ErrorBoundry;


//learning track //redux ->fetch ->display