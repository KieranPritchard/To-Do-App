// Generates the task list
function TaskList({ tasks, setTasks }) {
    // Deletes the task selected to be deleted 
    const handleDelete = (taskToDelete) => {
        // Create a new array excluding the deleted task
        const updatedTasks = tasks.filter((task) => task !== taskToDelete);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h2>Current Tasks</h2>
            {/* Maps the tasks to a list*/}
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}{" "}
                        <button onClick={() => handleDelete(task)}>
                        x
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;