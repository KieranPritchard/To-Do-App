import { useState } from "react"

function ToDoInput({setTasks, tasks}){
    // Stores the new tasks
    const [task, setTask] = useState("")

    // handles the changes of the input on key presses
    function handleChange(e){
        setTask(e.target.value)
    }

    // Handles the submission of the function
    function handleSubmit(e){
        e.preventDefault();
        setTasks([...tasks, task]);
        setTask("");
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