import { useState } from "react"

function ToDoInput({setTasks }){
    const [task, setTask] = useState("")

    function handleChange(e){
        setTask(e.target.value)
        setTasks()
    }


    function handleSubmit(e){
        e.preventDefault()
        setTasks(tasks.push(task))
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter Task
                    <input 
                        type="text"
                        value={task}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" />
            </form>
        </div>
    )
}

export default ToDoInput