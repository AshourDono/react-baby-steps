import React from 'react';
import Button from 'react-bootstrap/Button';

function Task(props) {
  let undoClass = 'col-5 fs-5';
  if (props.item.done) undoClass += ' text-decoration-line-through';
  return (
    <div className='row border border-3 border-dark rounded-2 w-75 h-50 bg-warning mx-auto my-2'>
      <div className='row p-1'>
        <p className={undoClass}>{props.item.name}</p>

        <Button
          variant='secondary'
          className='col-2 mx-2 btn-sm px-3'
          onClick={() => props.undo(props.item.id)}>
          {props.item.done ? 'Undone 😥' : 'Done 👌'}
        </Button>

        <Button
          variant='danger'
          className='col-2 btn-sm px-2'
          onClick={() => props.delete(props.item.id)}>
          Remove 🗑️
        </Button>

        <Button
          variant='dark'
          className='col-2 mx-2 btn-sm px-2'
          onClick={() => props.bulkDelete()}>
          Bulk Del ☢️
        </Button>
      </div>
    </div>
  );
}

export default Task;
