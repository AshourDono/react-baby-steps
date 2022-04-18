import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function UpperSection(props) {
  return (
    <div className='container d-flex flex-column align-items-center'>
      <div className='row border border-3 border-dark rounded-2 w-100 h-50 bg-info m-5'>
        <p className='text-white fs-1 fw-bolder text-end p-3'>To-Do App!</p>
        <p className='text-white fs-4 fw-bolder text-end p-3'>Add New To-Do</p>
        <Form className='mb-3' onSubmit={props.handleSubmit}>
          <Form.Group controlId='formBasicText'>
            {/* eliminate using props word .. a function calling props */}
            <Form.Control
              type='text'
              name='name'
              placeholder='Enter Your Name'
              value={props.todoTask}
              onChange={props.handleChange}
            />

            <Form.Text className='text-muted'>
              {props.todoTask.length === 0 ? 'required' : null}
            </Form.Text>

            <Button variant='success' type='submit' className='d-flex ms-auto my-2'>
              Add
            </Button>

          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default UpperSection;
