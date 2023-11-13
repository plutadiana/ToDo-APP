import "./statuses.css";
function Statuses(props) {
    return (
        <ul className="btn-statuses">
            <li style={{color: props.status === (null) ? "#EB8C19" : "#093d51"}} onClick={() => props.setStatus(null)}>All</li>
            <li style={{color: props.status === (false) ? "#EB8C19" : "#093d51"}} onClick={() => props.setStatus(false)}>Pending</li>
            <li style={{color: props.status === (true) ? "#EB8C19" : "#093d51"}} onClick={() => props.setStatus(true)}>Completed</li>
        </ul>
    )
}

export default Statuses;