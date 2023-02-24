import './App.css';
import {useState} from 'react';
import MenuHAHA from './components/Menu';
import {Footer} from './components/Footer';
// state, data trong app
// const student = {
//   name: 'Tung',
//   age: 30,
// };
// let counter = 0;
function App() {
  const [counter, setCounter] = useState(100);
  const [student, setStudent] = useState({name: 'Tung', age: 20});
  return (
    <div className='App'>
      <MenuHAHA />
      <h1 className='change-text'>name: {student.name}</h1>
      <h3>age: {student.age}</h3>
      <h3>couter = {counter}</h3>
      <MenuHAHA />
      <button
        onClick={() => {
          setCounter(counter + 2);
          setStudent({name: 'Hoàng', age: 30});
          console.log('counter:', counter);
        }}
      >
        Click
      </button>
      <Footer />
    </div>
  );
}

export default App;
