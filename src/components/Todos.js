import React, {Component} from 'react';
import TodoItems from './TodoItems'

class Todos extends Component {
    
    render(){
    return this.props.todos.map((todo)=>(
    <div className="Todo">
    <TodoItems todo = { todo } key = { todo.id }/>
    </div>
  ))};
}

export default Todos;
