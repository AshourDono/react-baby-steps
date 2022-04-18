import React, { useState } from 'react';
import LowerSection from './LowerSection';

import UpperSection from './UpperSection';

function TodoApp() {
  const [todoTask, setTodoTask] = useState('');

  const [todoList, setTodoList] = useState([]);

  const handleChange = e => {
    setTodoTask(e.target.value);
  };

  const handleAddTask = todoTask => {
    let clonedArray = [...todoList];
    let checkedId = clonedArray.length === 0 ? clonedArray.length + 1 : clonedArray.at(-1).id + 1;

    clonedArray = [...clonedArray, { id: checkedId, name: todoTask, done: false }];
    setTodoList(clonedArray);
  };

  const handleSubmit = e => {
    e.preventDefault();
    todoTask.length > 0 ? handleAddTask(todoTask) : alert('you can not send an empty task');
    setTodoTask('');
  };

  const handleUndo = id => {
    let mappedArray = todoList.map(item =>
      item.id === id ? { ...item, done: !item.done } : { ...item }
    );
    setTodoList(mappedArray);
  };

  const handleDelete = id => {
    let filteredArray = todoList.filter(item => {
      return item.id !== id;
      //unique id
    });
    setTodoList(filteredArray);
  };

  const handleBulkDelete = () => {
    let filteredArray = todoList.filter(item => {
      return !item.done;
      //unique id
    });
    setTodoList(filteredArray);
  };

  return (
    <>
      <UpperSection todoTask={todoTask} handleChange={handleChange} handleSubmit={handleSubmit} />
      <LowerSection
        todoList={todoList}
        handleUndo={handleUndo}
        handleDelete={handleDelete}
        handleBulkDelete={handleBulkDelete}
      />
    </>
  );
}

export default TodoApp;
