import React, { useState, useEffect } from 'react'
import Todo from './Todo'

export default function App() {
  // SYNTAX: useState
  // [stateVariable, functionToSetStateVariable] = useState(initialState)

  // syntax: useEffect(()=>{}, [])
  // useEffect(functionToRun, arrayOfDependecies)
  
  const getNews = async () => {
    const res = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=4ba2cb57066b49e2b7a8f20f5e0f65c6&pageSize=10')
    const data = await res.json()
    console.log(data)
}

  useEffect(()=>{
    getNews()
  }, [])

  const [todos, setTodos] = useState([{
    message: 'Do your homework',
    completed: true
  },
  {
    message: 'Do your dishes',
    completed: false
  },
  {
    message: 'Go to el Jim',
    completed: true
  },
  {
    message: 'Sleep',
    completed: false
  }])




  const renderTodos = () => {

    return todos.map((t, i) => <Todo key={i} t={t} />)
  }

  const upToDoList = (e)=>{
    e.preventDefault();

    const message = e.target.msg.value

    const toDoItem = {
      message: message,
      completed: false
    }

    setTodos([...todos, toDoItem])

  }

  return (
    <div>
      <h1>HELLO THIS IS THE TODO APP</h1>


      {renderTodos()}

      <form onSubmit={(e)=>{upToDoList(e)}}>
        <input type='text' name='msg'/>
        <button>Add</button>
      </form>


    </div>
  )
}
// this.setState({age:this.state.age + 1})