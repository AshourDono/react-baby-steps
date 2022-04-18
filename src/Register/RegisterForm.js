import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function RegisterForm() {
  //state
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = e => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = () => {
    alert(
      `Your name is: ${registerData.name}\nYour email is: ${registerData.email}\nYour username is: ${registerData.username}\nYour password is : ${registerData.password}`
    );
  };

  return (
    <div className='container'>
      <Form className='my-5' onSubmit={handleRegisterSubmit}>
        <Form.Group className='mb-3' controlId='formBasicText'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            name='name'
            placeholder='Enter Your Name'
            value={registerData.name}
            onChange={handleChange}
          />
          <Form.Text className='text-danger'>
            {registerData.name.length === 0 ? 'required' : null}
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicRegisterEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            name='email'
            placeholder='Enter email'
            value={registerData.email}
            onChange={handleChange}
          />
          {/* email validation */}
          <Form.Text className='text-danger'>
            {registerData.email.length === 0
              ? 'required'
              : !registerData.email
                  .toLowerCase()
                  .match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i)
              ? 'Please enter a valid email'
              : null}
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicUsername'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            name='username'
            placeholder='Enter Your Username'
            value={registerData.username}
            onChange={handleChange}
          />
          {/* username validation */}
          <Form.Text className='text-danger'>
            {registerData.username.length === 0
              ? 'required'
              : !registerData.username.match(
                  /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/
                )
              ? 'Username is 5 chars min, 20 chars max, no spaces allowed'
              : null}
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicRegisterPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            placeholder='Password'
            value={registerData.password}
            onChange={handleChange}
          />
          {/* password validation */}
          <Form.Text className='text-danger'>
            {registerData.password.length === 0
              ? 'required'
              : !registerData.password.match(
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
                )
              ? 'Password is 8 chars min - 20 chars max, at least you must type one (uppercase), one (lowercase), one (digit) and one (special character)'
              : null}
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicConfirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            name='confirmPassword'
            placeholder='Confirm Password'
            value={registerData.confirmPassword}
            onChange={handleChange}
          />
          {/* confirm password validation */}
          <Form.Text className='text-danger'>
            {registerData.password.length === 0
              ? 'required'
              : registerData.confirmPassword !== registerData.password
              ? 'Passwords do not match'
              : null}
          </Form.Text>
        </Form.Group>

        <Button variant='primary' type='submit' className='mx-2'>
          Register
        </Button>

        {/* simple routing */}
        <Button className=' bg-success '>
          <Link to='/' className='text-white text-decoration-none'>
            To Login
          </Link>
        </Button>
      </Form>
    </div>
  );
}

export default RegisterForm;
