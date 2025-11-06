import { useState } from "react"

function ToDoInput({setTasks, tasks}){
    const [task, setTask] = useState("")

    function handleChange(e){
        setTask(e.target.value)
    }


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