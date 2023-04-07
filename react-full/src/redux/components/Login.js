import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux';
import {loginFirebase} from '../feature/userSlice';
import Menu from '../../Menu';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  return (
    <Form>
      <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type='email'
          placeholder='name@example.com'
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Pass</Form.Label>
        <Form.Control
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type='password'
          placeholder='inputpasss'
        />
      </Form.Group>
      <Button
        onClick={() => {
          dispatch(
            loginFirebase({
              email: email,
              password: password,
            }),
          );
        }}
      >
        Login
      </Button>
      <Menu />
    </Form>
  );
}
