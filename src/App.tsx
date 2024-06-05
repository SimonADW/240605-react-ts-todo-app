import { useState } from 'react'
import './App.css'
import AddTodoSection from './components/AddTodoSection/AddTodoSection'
import DisplayTodoSection from './components/DisplayTodoSection/DisplayTodoSection'

function App() {
  const [todosList, setTodosList] = useState([    
    {title: "",
     date: "",
     description: "",
    }
  ]);

  return (
    <>
      <div className="main">
        <AddTodoSection todos={todosList} setTodos={setTodosList} />
        <DisplayTodoSection todos={todosList}/>
      </div>
    </>
  )
}

export default App
