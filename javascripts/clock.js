import React, {Component} from "react";

export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    // life cycle hooks
    componentDidMount(){
        this.timerID = setInterval(()=>{this.tick()},1000);
    }
    // life cycle hooks
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }
    
    render(){
        return (
            <div>
            <h1>Hello, react states!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    } 
}