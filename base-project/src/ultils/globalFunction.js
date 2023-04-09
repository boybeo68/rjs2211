export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const routerData = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/random',
    name: 'RandomProject',
  },
  {
    path: '/parent',
    name: 'Parent components',
  },
  {
    path: '/todoApp',
    name: 'TodoApp',
  },
  {
    path: '/redux',
    name: 'Redux app',
  },
  {
    path: '/post',
    name: 'Post',
  },
];

export const API_KEY = 'AIzaSyCmxTaBVxruDEPSSvsu6fD9dru9Elc1gdo';
