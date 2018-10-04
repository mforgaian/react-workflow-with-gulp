import React, {Component} from "react";
import Table from '../../components/Table';
import Form from '../../components/Form';

export default class TodoApp extends Component{
    state = {
        characters:[]
    }

    removeCharacter = index =>{
        const {characters} = this.state;
        this.setState({
            characters: characters.filter((character, i)=>{
                return i !== index;
            })
        })
    }

    handleSubmit = character =>{
        this.setState({
            characters: [...this.state.characters, character]
        })
    }
    
    render(){
        const {characters} = this.state;
        return(
            <div className="container">
                <h1>Welcome to todo app</h1>
                <p> Your todo list is</p>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <h3>Add a todo item with description.</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}