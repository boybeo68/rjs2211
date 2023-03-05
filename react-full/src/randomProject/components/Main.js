import React from 'react';
import Parent from '../components/Parent';
import Menu from './Menu';
import Menu2 from './Menu2';

const Main = () => {
  return (
    <div>
      <h1>Main</h1>
      <Menu />
      <Parent />
      <div className='d-flex justify-content-center align-items-center'>
        <div>item1</div>
        <div>item2</div>
        <div>item3</div>
      </div>
    </div>
  );
};

export default Main;
