import React from 'react';

class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello from {this.props.phrase}!</h1>
            </div>
        );
    }
}


export default HelloWorld;