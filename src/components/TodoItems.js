import React, { Component } from 'react';
import propTypes from 'prop-types'


class TodoItems extends Component {
    render() { 
        return (
            <div style= {{ backgroundColor: 'Blue'}}>
                <h3>{ this.props.todo.title }</h3>
            </div>
        );
    }
}
 
TodoItems.propTypes = {
    todo : propTypes.object.isRequired
}
export default TodoItems;
