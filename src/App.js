import { useEffect, useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import ShowTask from './components/ShowTask';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('theme')) || 'medium'
  );
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );
  const [task, setTask] = useState('');
  const [editTaskId, setEditTaskId] = useState('');

  const addTask = (e, editId) => {
    e.preventDefault();
    if (editId) {
      const updatedTasks = tasks.map((t) => {
        if (t.id === editId) {
          t.name = task;
        }
        return t;
      });
      setTasks(updatedTasks);
    } else {
      const newTask = {
        id: uuidv4(),
        name: task,
        time: new Date().toLocaleString(),
      };
      setTasks([...tasks, newTask]);
      setTask('');
      setEditTaskId('');
    }
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  const deleteTask = (taskId) => {
    // let confirmStatus = window.confirm(
    //   'Are sure you want to delete this task ?'
    // );
    // if (confirmStatus) {
    const taskData = tasks.filter((t) => t.id !== taskId);
    setTasks(taskData);
    // }
  };

  const editTask = (task) => {
    console.log(task);
    console.log(task.name);
    setTask(task.name);
    setEditTaskId(task.id);
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Header theme={theme} setTheme={setTheme}>
        Taskmate
      </Header>
      <AddTask
        task={task}
        setTask={setTask}
        addTask={addTask}
        editTaskId={editTaskId}
      />
      <ShowTask
        tasks={tasks}
        clearAllTasks={clearAllTasks}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
