import React from 'react';
import Task from './Task';

function LowerSection(props) {
  //destructing
  return (
    <div className='container d-flex flex-column align-items-center'>
      <div className='row border border-3 border-dark rounded-2 w-100 h-50 bg-info mx-5'>
        <p className='text-center fs-2 fw-bold bg-danger my-0'>To-Do List</p>
        <p className='text-center fs-4'>Let's get some work done 😎</p>

        {props.todoList.map(item => {
          return (
            <Task
              key={item.id}
              item={item}
              undo={() => props.handleUndo(item.id)}
              delete={() => props.handleDelete(item.id)}
              bulkDelete={() => props.handleBulkDelete()}
            />
          );
        })}
      </div>
    </div>
  );
}

export default LowerSection;
