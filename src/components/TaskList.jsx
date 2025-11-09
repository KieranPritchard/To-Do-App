// Generates the task list
function TaskList({ tasks, setTasks }) {
    // Deletes the task selected to be deleted 
    const handleDelete = (taskToDelete) => {
        // Create a new array excluding the deleted task
        const updatedTasks = tasks.filter((task) => task !== taskToDelete);
        setTasks(updatedTasks);
    };

    return (
        <div className="m-4 p-4 border-2 border-purple-600 bg-gray-100 flex flex-col rounded-lg">
            <h2 className="text-lg font-bold mb-2">Current Tasks</h2>
            {/* Maps the tasks to a list*/}
            <ul>
                {tasks.map((task, index) => (
                    <li
                        className="p-2 mb-2 border-2 border-purple-600 rounded-md flex justify-between items-center"
                        key={index}
                    >
                        <span>{task}</span>
                        <button
                            className="border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition 300 rounded-lg px-3 py-2"
                            onClick={() => handleDelete(task)}
                        >
                            x
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;