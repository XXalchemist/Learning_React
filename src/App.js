import React, { Component } from 'react';
import './App.css';
import Todos from "./components/Todos"
import nav from "./components/Nav"

class App extends Component{
  state = {
    todos:[
      {
        id:1,
        title:'Doing something',
        completed:false

      },
      {
        id:2,
        title:'Learning react',
        completed:false

      },
    ]
  }

  markComplete = (id)=>{
    this.setState( { todos : this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed=!todo.completed
      }
      return todo
    }) });
  }

  delTodo = (id)=>[
    this.setState({todos:[...this.state.todos.filter(todo => todo.id!==id)
    ]}
    )
  ]

  render(){
    return(
      <div className='App'>
        <nav />
        <Todos todos = {this.state.todos} markComplete = { this.markComplete } delTodo = { this.delTodo }/>
        </div>
    )
  }
}
export default App;
