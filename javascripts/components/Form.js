import React, {Component} from "react";

export default class Form extends Component{
    constructor(props){
        super(props);
        this.initialState = {
            name:'',
            description: ''
        }
        this.state = this.initialState;
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]:value
        })
    }

    submitForm = (event) => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render(){
        const {name, description} = this.state;
        return(
            <form>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={this.handleChange} />
                <label>Description</label>
                <input 
                    type="text" 
                    name="description" 
                    value={description} 
                    onChange={this.handleChange}/>
                <input 
                    type="button" 
                    value="Submit" 
                    onClick={this.submitForm} />
            </form>
        );
    }
}