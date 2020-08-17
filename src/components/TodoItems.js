import React, { Component } from 'react';
import propTypes from 'prop-types'


class TodoItems extends Component {
    
    const getStyle = ()=>{
        return {
            textDecoration : this.props.todo.completed ? `line-through` : none
        }
    }
    render() { 
        return (
            <div style= { this.getStyle }>
                <h3>{ this.props.todo.title }</h3>
                <input
                type = 'checkbox'
                onChange = { this.props.markComplete }/>
            </div>
        );
    }
}
 
TodoItems.propTypes = {
    todo : propTypes.object.isRequired
}
export default TodoItems;
