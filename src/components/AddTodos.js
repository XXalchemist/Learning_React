import React, { Component } from 'react';

export default class AddTodos extends Component {
    render(){
        state = {
            title = ''
        }

        onChange = (e)=> {
            this.setState({title: e.target.name})
        }

        onSubmit = (e)=>{
            e.preventDefault()
            this.props.adddTodo(this.state.title)
            this.setState({title:''})
        }
        <form onsubmit = {this.onSubmit}>
            <input 
            type = 'text'
            name = 'title'
            style = {{}}
            value = { this.state.title }
            onChange = { this.onChange }
            />


        return(
            <form>
                <input 
                type = "text" 
                style = {{ flex : 10 }}
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
