import "./inputTask.css";
function InputTask(props) {

    return (      
        <div style={{textAlign: 'center'}}>
            <input type="text"
                placeholder="add new task..."
                value={props.inputValue.name}
                onInput={(event) => props.setInputValue({ ...props.inputValue, name: event.target.value })} />

            <button className="btnSave" disabled={props.inputValue === ""} onClick={() => props.addTask()}>Save</button>
        </div>
    )
}

export default InputTask;