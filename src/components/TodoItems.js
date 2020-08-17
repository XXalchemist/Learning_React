import React, { Component } from 'react';
import propTypes from 'prop-types'


class TodoItems extends Component {
    
    getStyle = ()=>{
        return {
            textDecoration : this.props.todo.completed ? `line-through` : 'none'
        }
    }
    render() { 
        // Destructuring
        const { id, title } = this.props.todo
        return (
            <div className= 'container' style= { this.getStyle ()}>
                
                <div className="card">
                    <div className="card-body" > 
                    <h5 className="card-title">{ title }</h5>
                    <hr></hr>
                    <input
                    type = 'checkbox'
                    onChange = { this.props.markComplete.bind(this,id) }/>
                    <button onClick =  { this.props.delTodo.bind(this,id) } 
                    className = "btn btn-sm btn-danger">
                        <span className="fas fa-trash-alt"></span>
                    </button>
                
                
                </div>
                
                </div>
                <p></p>
            </div>
        );
    }
}
 
TodoItems.propTypes = {
    todo : propTypes.object.isRequired
}
export default TodoItems;
