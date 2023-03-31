import React from 'react';
import Level4 from './Level4';
import {useSelector} from 'react-redux';

export default function Level3({data, changeName}) {
  const userData = useSelector((state) => state.userReducer);
  console.log('bb userData', userData);
  return (
    <div style={{padding: '20px', backgroundColor: 'green'}}>
      ========== Level 3{data}
      <br />
      {userData.token}
      =========
      <br />
      {userData.name}
      <Level4 data={data} changeName={changeName} />
    </div>
  );
}
