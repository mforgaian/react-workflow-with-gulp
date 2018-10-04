import React, {Component} from "react";
import Table from '../../components/Table';
import Form from '../../components/Form';

export default class TodoApp extends Component{
    state = {
        items:[]
    }
    // method to remove item
    removeTodoItem = index =>{
        const {items} = this.state;
        this.setState({
            items: items.filter((item, i)=>{
                return i !== index;
            })
        })
    }
    // method to handle submit
    handleSubmit = item =>{
        this.setState({
            items: [...this.state.items, item]
        })
    }
    
    render(){
        const {items} = this.state;
        return(
            <div className="container">
                <h1>Welcome to todo app</h1>
                <p> Your todo list is</p>
                <Table
                    todoItems={items}
                    removeTodoItem={this.removeTodoItem}
                />
                <h3>Add a todo item with description.</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}