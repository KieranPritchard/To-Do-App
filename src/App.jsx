import { useState } from "react"
import ToDoInput from "./components/ToDoInput"

function App(){
  const [tasks, setTasks] = useState([])

  return(
    <div>
      <ToDoInput setTasks={setTasks}/>
    </div>
  )
}

export default App