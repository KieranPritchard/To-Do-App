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
        <div className="m-4 p-4 border-2 border-purple-600 flex justify-center rounded-lg bg-gray-100">
            <form onSubmit={handleSubmit} className="flex w-full max-w-xl">
                <input 
                    className="grow mr-2 p-2 border-2 border-purple-600 rounded-lg"
                    placeholder="Enter Task"
                    type="text"
                    value={task}
                    onChange={handleChange}
                />
                <input 
                    className="border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition 300 p-2 rounded-lg bg-gray-100 cursor-pointer"
                    type="submit"
                    value="Add Task"
                />
            </form>
        </div>
    )
}

export default ToDoInput