import React from 'react';
import {Button} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {increeCount, increeCountWithParams} from '../feature/couterSlice';

export default function Couter() {
  const dataCounter = useSelector((state) => state.couterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{dataCounter.value}</h1>
      <Button
        onClick={() => {
          dispatch(increeCount());
        }}
      >
        Tang len 1 don vi
      </Button>
      <Button
        onClick={() => {
          dispatch(increeCountWithParams(9));
        }}
      >
        Tang len 9 don vi
      </Button>
    </div>
  );
}
