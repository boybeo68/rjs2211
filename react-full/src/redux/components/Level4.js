import React from 'react';
import {useDispatch} from 'react-redux';
import {changeToken} from '../feature/userSlice';

export default function Level4(props) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(changeToken());
      }}
      style={{padding: '20px', backgroundColor: 'pink'}}
    >
      =================
      <p>Level4</p>
      {props.data}
    </div>
  );
}
