import logo from './logo.svg';
import './App.css';
import RandomProject from './randomProject/Main';
import Parent from './randomProject/components/learn/Parent';
import Home from './todoApp';
import ReduxApp from './redux';
import Couter from './redux/components/Couter';
import Post from './redux/components/Post';
import {routerData} from './ultils/globalFunction';
import {useNavigate, Link} from 'react-router-dom';
import Menu from './Menu';

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <Menu />
    </div>
  );
}

export default App;
