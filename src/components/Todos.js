import React, {Component} from 'react';

class Todos extends Component {
    
    render(){
    return this.props.todos.map((todo)=>(
    <div className="Todo">
    <h1>ID : { todo.id }</h1>
    <h1>Title : { todo.title }</h1>
    <h1>Completed : { todo.completed }</h1>
    </div>
  ))};
}

export default Todos;
