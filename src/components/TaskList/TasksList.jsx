import "./taskList.css";
function TasksList(props) {

    return props.tasks.length === 0 ? (
                    <p style={{paddingLeft:"25px", color:"#054e6b", fontWeight:"600"}}>You don't have any tasks...</p>
                ) : (
                    <ul>
                        {props.tasks.map(task => (
                            <li className="task-container" style={{ background: task.completed ? "#b7dae791" : "#fdfcfc8f"}} key={task.id}>
                                <div className="task-text">
                                    <input className="checkbox" type="checkbox" checked={task.completed} onChange={(event) => props.handleCompleted(task, event.target.checked)} />
                                    <span style={{textDecorationLine: task.completed === true ? "line-through" : "none",}}>{task.name}</span>
                                </div>
                                <div className="btns-task">
                                    <button disabled={task.completed} className="btnEdit" onClick={() => props.setInputValue(task)}>Edit</button>
                                    <button onClick={() => props.deleteTask(task)}>Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )
            }

export default TasksList;