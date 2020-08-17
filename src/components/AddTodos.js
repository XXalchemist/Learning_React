import React, { Component } from 'react';

export default AddTodos extends Component {
    render(){

        return(
            <form>
                <input 
                type = "text" {{ flrx : 10 }}
                name = 'title'
                paceholder = ' Add Your Work '
                />
                <input
                type = 'submit'
                value = 'submit'
                className = 'btn btn-success'
                style = {{ flex:1 }} 
                />
            </form>
        )
    }
    
};
