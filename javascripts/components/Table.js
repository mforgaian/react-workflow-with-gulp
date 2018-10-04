import React, {Component} from "react";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    const rows = props.todoItems.map((row, index)=>{
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.description}</td>
                <td><button onClick={()=>props.removeTodoItem(index)}>Delete</button></td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>
}

export default class Table extends Component{
    render(){
        const {todoItems, removeTodoItem} = this.props;
        return(
            <table>
                <TableHeader />
                <TableBody todoItems={todoItems} removeTodoItem={removeTodoItem}/>
            </table>
        );
    }
}