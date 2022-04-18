import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  //validate onBlur
  const handleLoginChange = e => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    alert(`Your email is: ${loginData.email}\nYour password is : ${loginData.password}`);
  };

  return (
    <div className='container'>
      <Form className='my-5' onSubmit={handleLoginSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name='email'
            type='email'
            placeholder='Enter email'
            value={loginData.email}
            onChange={handleLoginChange}
          />
          {/* email validation */}
          <Form.Text className='text-danger'>
            {loginData.email.length === 0
              ? 'required'
              : !loginData.email.toLowerCase().match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i)
              ? 'Please enter a vaild Email'
              : null}
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name='password'
            type='password'
            placeholder='Password'
            value={loginData.password}
            onChange={handleLoginChange}
          />
          {/* password validation */}
          <Form.Text className='text-danger'>
            {loginData.password.length === 0
              ? 'required'
              : !loginData.password.match(
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
                )
              ? 'Password is 8 chars min - 20 chars max, at least you must type one (uppercase), one (lowercase), one (digit) and one (special character)'
              : null}
          </Form.Text>
        </Form.Group>

        <Button variant='primary' type='submit' className='mx-2'>
          Login
        </Button>

        {/* routing */}
        <Button variant='success me-2'>
          <Link to='/register' className='text-white text-decoration-none'>
            To Register
          </Link>
        </Button>

        <Button variant='info'>
          <Link to='/todo' className='text-white text-decoration-none'>
            To Todo App
          </Link>
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
