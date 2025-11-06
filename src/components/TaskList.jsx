function TaskList({ tasks, setTasks }) {
    const handleDelete = (taskToDelete) => {
        // Create a new array excluding the deleted task
        const updatedTasks = tasks.filter((task) => task !== taskToDelete);
        setTasks(updatedTasks);
    };

    return (
        <div>
        <h2>Current Tasks</h2>
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