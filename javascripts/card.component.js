import React from 'react';

export default class CardComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className="person23"> <h1> {this.props.name} </h1><p>Your Location: {this.props.location}</p></div>;
    };
}
