import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RandomProject from './randomProject/Main';
import Parent from './randomProject/components/learn/Parent';
import TodoApp from './todoApp';
import ReduxApp from './redux';
import Couter from './redux/components/Couter';
import Post from './redux/components/Post';
import PostDetail from './redux/components/PostDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/random',
    element: <RandomProject />,
  },
  {
    path: '/parent',
    element: <Parent />,
  },
  {
    path: '/todoApp',
    element: <TodoApp />,
  },
  {
    path: '/redux',
    element: <ReduxApp />,
  },
  {
    path: '/couter',
    element: <Couter />,
  },
  {
    path: '/post',
    element: <Post />,
  },
  {
    path: '/post/:idPost/:name',
    element: <PostDetail />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
