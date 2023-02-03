import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(){
        super();
        this.state={hasError:false}
    }
    static getDerivedStateFromError(){
        return {hasError:true}
    }
    render() {
        if(this.state.hasError){
            return <h1>Something Went wrong</h1>
        }
        return (
            this.props.children
        );
    }
}

export default ErrorBoundry;
