import React from 'react';

const ShowTask = ({ tasks, clearAllTasks, deleteTask, editTask }) => {
  return (
    <section className='showTask'>
      <div className='head'>
        <div>
          <span className='title'>Todo</span>
          <span className='count'>{tasks.length}</span>
        </div>
        <button className='clearAll' onClick={clearAllTasks}>
          Clear All
        </button>
      </div>
      <ul>
        {tasks.map((t) => {
          return (
            <li key={t.id}>
              <p>
                <span className='name'>{t.name}</span>
                <span className='time'>{t.time}</span>
              </p>
              <i
                className='bi bi-pencil-square'
                onClick={() => editTask(t)}
              ></i>
              <i className='bi bi-trash' onClick={() => deleteTask(t.id)}></i>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ShowTask;
