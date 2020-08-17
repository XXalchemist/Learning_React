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
            <div style= { this.getStyle ()}>
                <p>{ title }
                <input
                type = 'checkbox'
                onChange = { this.props.markComplete.bind(this,id) }/>
                </p>
            </div>
        );
    }
}
 
TodoItems.propTypes = {
    todo : propTypes.object.isRequired
}
export default TodoItems;
