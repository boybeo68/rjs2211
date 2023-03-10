import React, {useState, useEffect} from 'react';
import {Container, Row, Button, Form, InputGroup} from 'react-bootstrap';
const Main = () => {
  const [countGuess, setCountGuess] = useState(0);
  const [randomNumber, setrandomNumber] = useState(null);
  const [inputValue, setinputValue] = useState('');
  const newGame = () => {
    setCountGuess(0);
  };
  const guess = () => {
    setCountGuess(countGuess + 1);
  };
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    console.log('mouting');
    const random = getRandomInt(1, 100);
    setrandomNumber(random);
  }, []);

  return (
    <Container>
      <Row>
        <div className='fs-1 text-center m-5 fw-bold'>
          Random Number (1-100)
        </div>
      </Row>
      <Row>
        <Button onClick={newGame} variant='primary'>
          New game
        </Button>
      </Row>
      <p className='my-2'>Số lần đoán của bạn là: {countGuess}</p>
      <p>{randomNumber}</p>
      <InputGroup className='mb-3'>
        <Form.Control
          placeholder='Input number'
          aria-label='Input number'
          aria-describedby='basic-addon2'
          type='number'
          value={inputValue}
          onChange={(text) => {
            setinputValue(text.target.value);
          }}
        />
        <Button onClick={guess} variant='success' id='button-addon2'>
          Guess
        </Button>
      </InputGroup>
    </Container>
  );
};

export default Main;
