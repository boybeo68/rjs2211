import React, {useEffect} from 'react';

const Child = ({name, dataFromParent}) => {
  useEffect(() => {
    console.log(
      'mounting: hay dùng cho những hành động muốn làm khi component xuất hiện',
    );

    const time = setInterval(() => {
      console.log('counting');
    }, 1000);
    return () => {
      clearInterval(time);
      console.log('unmouting: dùng để clear data khi thoát component');
    };
  }, []);

  return (
    <div className='wrap-child'>
      <h3>Child</h3>
      <p>{dataFromParent}</p>
      <p>{name}</p>
    </div>
  );
};

export default Child;
