import React from 'react';
import Level3 from './Level3';
import {useDispatch} from 'react-redux';
import {Button} from 'react-bootstrap';
import {changeName} from '../feature/userSlice';

export default function Level2({data}) {
  const dispatch = useDispatch();

  return (
    <div style={{padding: '20px', backgroundColor: 'blue'}}>
      ======= Level 2{data}
      <Level3 data={data} />
      <Button
        onClick={() => {
          dispatch(changeName({data: 'Hoang duoc truyen vao'}));
        }}
        variant='success'
      >
        change name
      </Button>
    </div>
  );
}
