import './App.css';
import { useState } from 'react';
import InputTask from './components/InputTask/InputTask';
import TasksList from './components/TaskList/TasksList';
import Statuses from './components/Statuses/Statuses';

function App() {
  const defaultTaskValue = {
    id: null,
    name: '',
    completed: false,
  };
  const [inputValue, setInputValue] = useState(defaultTaskValue);
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState(null);
    
  const addTask = () => {
    if (inputValue.id === null) {
      inputValue.id = tasks.length + 1;

      setTasks([...tasks, inputValue]);
    } else {
      const index = tasks.findIndex(item => item.id === inputValue.id);

      if (index !== -1) {
        tasks[index] = inputValue;

        setTasks([...tasks]);
      }
    }

    setInputValue(defaultTaskValue);
  }

  const handleClearAll = () => {
    setTasks([]);
    setInputValue(defaultTaskValue);
}

const deleteTask = (task) => {
  const index = tasks.findIndex(item => item.id === task.id)

  if (index !== -1) {
      tasks.splice(index, 1);

      setTasks([...tasks]);
  }
}

const handleCompleted = (task, checked) => {
  const index = tasks.findIndex(item => item.id === task.id);

  if (index !== -1) {
      tasks[index] = { ...task, completed: checked }
  }

  setTasks([...tasks]);
}

  return (
    <>
    <div className='container'>
      <h1 className='title'>To Do List!</h1>
      <InputTask
        inputValue={inputValue}
        setInputValue={setInputValue}
        addTask={addTask} />

        <div className='container-status'>
          <Statuses status={status} setStatus={setStatus}/>
          <button className='btnClearAll' onClick={() => handleClearAll()}>Clear All</button>
        </div>
      
      <TasksList 
      tasks={tasks.filter(task => {
        if (status === null) {
          return true;
        } else {
          return task.completed === status;
        }})}
      setInputValue={setInputValue} 
      status={status} 
      handleCompleted={handleCompleted} 
      deleteTask={deleteTask} />
    </div>
    </>
  );
}

export default App;
