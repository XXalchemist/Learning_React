import React, { Component } from 'react';

export default class AddTodos extends Component {
    state = {
        title :''
    }

    onChange = (e)=> {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit = (e)=>{
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({title:''})
    }
    render(){
       
       
        
        return(
            <div className ='container'>
            <form style = {{ display:'flex' }} onSubmit = {this.onSubmit}>
            <input 
            type = 'text'
            name = 'title'
            style = {{ flex: '10' , padding: '5px' }}
            value = { this.state.title }
            placeholder = 'Add your todos...'
            onChange = { this.onChange }
            />
    
            <input
                type = 'submit'
                value = 'Add'
                className = 'btn btn-success'
                style = {{ flex:1 }} 
                />
            </form>
            <p></p>
            </div>
        )
    }
    
};
