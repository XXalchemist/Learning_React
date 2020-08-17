import React, {Component} from 'react';
import TodoItems from './TodoItems'
import propTypes from 'prop-types'

class Todos extends Component {
    
    
    render(){
    return this.props.todos.map((todo)=>(
    <div className="Todo">
    <TodoItems todo = { todo } key = { todo.id } markComplete = { this.props.markComplete }/>
    </div>
  ))};
}

// Validation of props
Todos.propTupes = {
    todos: propTypes.array.isRequired
}
export default Todos;
