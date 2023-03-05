import React, {useState} from 'react';

import Child from './Child';

const Parent = () => {
  const [number, setNumber] = useState(90);
  const [showLight, setShowLight] = useState(false); // ush
  const [products, setProducts] = useState([
    {name: 'Iphone', price: 20000},
    {name: 'Android', price: 10000},
    {name: 'Macbook', price: 50000},
    {name: 'windowPhone', price: 1000},
  ]);
  //   tất cả event nhận vào 1 function => chứ không phải chạy function
  const toggleChild = () => {
    setShowLight(!showLight);
  };

  const inCreeCount = (numberIncree) => {
    setNumber(number + numberIncree);
  };
  //   để đẩm bảo tất cả event luôn nhận vào function chú ý tham số truyền vào.
  //   - function ko có tham số thì truyền trực tiếp vào event
  //   - function có tham số thì bọc trong 1 function khác

  return (
    <div>
      <h2 className='parent-click'>Parent</h2>
      <p>
        <button onClick={toggleChild}>toggle Child</button>
        <button
          onClick={() => {
            inCreeCount(10);
          }}
        >
          incree Count
        </button>
      </p>
      <p>{number}</p>
      {showLight === true ? (
        <Child dataFromParent={number} name={'Tung'} />
      ) : null}

      <ul>
        {/* react render list thì luôn luôn phải add props key vào  */}
        {products.map((item, index) => {
          return (
            <li className='product' key={index}>
              <span>
                {item.name} - {item.price}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Parent;
