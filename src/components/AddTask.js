import React from 'react';

const AddTask = ({ task, setTask, addTask, editTaskId }) => {
  return (
    <section className='addTask'>
      <form>
        <input
          type='text'
          name='task'
          autoComplete='off'
          placeholder='add task'
          maxLength='25'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type='submit' onClick={(e) => addTask(e, editTaskId)}>
          {editTaskId ? 'Edit' : 'Add'}
        </button>
      </form>
    </section>
  );
};

export default AddTask;
