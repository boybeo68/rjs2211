import './App.css';
import {useState} from 'react';
import MenuHAHA from './components/Menu';
import {Footer} from './components/Footer';
import {studentConst, PI} from './ultils/helper';
// state, data trong app
// const student = {
//   name: 'Tung',
//   age: 30,
// };
// let counter = 0;
function App() {
  const [counter, setCounter] = useState(PI);
  const [student, setStudent] = useState(studentConst);
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
