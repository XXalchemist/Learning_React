import React, { Component } from 'react';
import './App.css';
import Todos from "./components/Todos"
import Nav from "./components/Nav"
import AddTodos from './components/AddTodos';

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

  addTodo = (title)=>{
    const newTodo = { id :5 ,
                     title,
                    completed:false
                  }
    this.setState({todos:[ ...this.state.todos,newTodo] })
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
        
        <div className = 'container'>
        <Nav />
        <AddTodos addTodo={ this.addTodo }/>
        <Todos todos = {this.state.todos} markComplete = { this.markComplete } delTodo = { this.delTodo }/>
        </div>
        </div>
    )
  }
}
export default App;
