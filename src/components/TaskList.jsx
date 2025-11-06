function TaskList({tasks}){
    return(
        <div>
            <h2>Current Tasks</h2>
            <ul>
                {tasks.map((task) => 
                    <li>
                        {task}
                        <button>
                            x
                        </button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default TaskList