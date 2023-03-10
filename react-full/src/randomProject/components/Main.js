import React, {useState, useEffect} from 'react';
import {Container, Row, Button, Form, InputGroup} from 'react-bootstrap';
import {getRandomInt} from '../../ultils/globalFunction';

const RESULT = {
  thang: 'thang',
  thua: 'thua',
  doing: 'doing',
};
const Main = () => {
  const [countGuess, setCountGuess] = useState(0);
  const [randomNumber, setrandomNumber] = useState(null);
  const [inputValue, setinputValue] = useState('');
  const [result, setResult] = useState('');
  const [checkResult, setcheckResult] = useState(RESULT.doing);
  const newGame = () => {
    setCountGuess(0);
    createRandom();
    setResult('');
    setcheckResult(RESULT.doing);
  };
  const guess = () => {
    if (inputValue > randomNumber) {
      setResult('Số lớn quá rồi');
    } else if (inputValue < randomNumber) {
      setResult('Số nhỏ quá rồi');
    } else {
      setResult(`Bạn đoán đúng rồi số ngẫu nhiên là ${randomNumber}`);
      setcheckResult(RESULT.thang);
    }
    setCountGuess(countGuess + 1);
    setinputValue('');
  };

  useEffect(() => {
    createRandom();
  }, []);

  useEffect(() => {
    if (countGuess > 7) {
      setResult('Bạn đã thua rồi');
      setcheckResult(RESULT.thua);
    }
  }, [countGuess]);

  useEffect(() => {
    if (checkResult === RESULT.thang) {
      setResult('Sẽ reset game mới trong 5s...');
      setTimeout(() => {
        newGame();
      }, 5000);
    }
  }, [checkResult]);

  const createRandom = () => {
    const random = getRandomInt(1, 100);
    setrandomNumber(random);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      guess();
    }
  };

  return (
    <Container>
      <Row>
        <div
          className={`fs-1 text-center m-5 fw-bold ${
            checkResult === RESULT.thang
              ? 'text-success'
              : checkResult === RESULT.thua
              ? 'text-danger'
              : 'text-black'
          } `}
        >
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
          onKeyDown={handleKeyDown}
          onChange={(text) => {
            setinputValue(text.target.value);
          }}
        />
        <Button onClick={guess} variant='success' id='button-addon2'>
          Guess
        </Button>
      </InputGroup>
      <p>{result}</p>
    </Container>
  );
};

export default Main;
