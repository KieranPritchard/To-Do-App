import { useState } from "react"
import ToDoInput from "./components/ToDoInput"
import TaskList from "./components/TaskList"
import Header from "./components/Header"

function App(){
  // Stores tasks as a state
  const [tasks, setTasks] = useState([])

  return(
    <div>
      <Header />
      <ToDoInput tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default App