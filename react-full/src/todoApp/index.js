import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from 'axios';
import Menu from '../Menu';
const URL = 'https://6319968e8e51a64d2be76eed.mockapi.io/todos';

export default function TodoApp() {
  const [todos, setTodos] = useState(null);
  const [error, seterror] = useState(null);
  const [valueName, setvalueName] = useState('');
  const [valueNameEdit, setValueNameEdit] = useState('');
  const [valueDes, setValueDes] = useState('');
  const [loading, setLoading] = useState(false);
  const [isEdit, setisEdit] = useState(null);
  const [counter, setcounter] = useState(0);
  useEffect(() => {
    getListTodo();
  }, []);

  // get list todo from server
  const getListTodo = async () => {
    setLoading(true);
    try {
      const result = await axios.get(URL);
      setLoading(false);
      setTodos(result.data);
    } catch (error) {
      setLoading(false);
      seterror('Có lỗi xảy ra');
    }
  };

  const deleteLocal = (id) => {
    const listWithoutId = todos.filter((i) => i.id !== id);
    setTodos(listWithoutId);
    deleteItem(id);
  };

  const deleteItem = async (id) => {
    // setLoading(true);
    try {
      await axios.delete(`${URL}/${id}`);
      // resetData();
    } catch (error) {
      setLoading(false);
      // seterror("Có lỗi xảy ra");
      alert('Có lỗi xảy ra khi xoá item.');
      getListTodo();
    }
  };

  const addItem = async () => {
    try {
      // setLoading(true);
      await axios.post(URL, {
        name: valueName,
        isCheck: false,
        description: valueDes,
      });
      // resetData();
    } catch (error) {
      setLoading(false);
      alert('Có lỗi xảy ra');
      resetData();
    }
  };

  const addItemLocal = () => {
    // tương tác với state => không được phép thay đổi trực tiếp state. Tức là không được dùng hàm thay đỏi data ban đầu
    // clone lại state trước khi làm
    // C1: sử dụng Json parst + stringify. Dùng cho được mọi trường hợp
    const cloneData = JSON.parse(JSON.stringify(todos));
    cloneData.push({
      id: Number(todos[todos.length - 1].id) + 1 + '',
      name: valueName,
      isCheck: false,
      description: valueDes,
    });
    console.log(cloneData);
    // C2: sử spread syntax . Chỉ clone đươc 1 level
    // const cloneData = [{
    //   id: 123,
    //   name: valueName,
    //   isCheck: false,
    //   description: valueDes,
    // }, ...todos, ]

    setTodos(cloneData);
    addItem();
  };

  const editLocal = (id) => {
    const cloneTodos = JSON.parse(JSON.stringify(todos));
    const findIndexItem = cloneTodos.findIndex((i) => i.id === id);
    const dataFind = cloneTodos[findIndexItem];
    cloneTodos.splice(findIndexItem, 1, {
      id: dataFind.id,
      name: valueNameEdit,
      isCheck: false,
      description: valueDes,
    });
    setTodos(cloneTodos);
    setisEdit(null);
    editTodo(id);
  };

  const editTodo = async (id) => {
    try {
      // setLoading(true);
      await axios.put(`${URL}/${id}`, {
        name: valueNameEdit,
        isCheck: false,
        description: valueDes,
      });
    } catch (error) {
      setLoading(false);
      alert('Có lỗi xảy ra');
      resetData();
    }
  };
  const resetData = () => {
    setLoading(false);
    setvalueName('');
    setValueDes('');
    setisEdit(null);
    getListTodo();
  };

  return (
    <div>
      <Menu />
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Nhập name</Form.Label>
          <Form.Control
            onChange={(text) => {
              setvalueName(text.target.value);
            }}
            value={valueName}
            type='text'
            placeholder='Nhập name'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Nhập description</Form.Label>
          <Form.Control
            onChange={(text) => {
              setValueDes(text.target.value);
            }}
            value={valueDes}
            type='text'
            placeholder='Nhập description'
          />
        </Form.Group>

        {isEdit ? (
          <Button onClick={() => editTodo(isEdit)} variant='success'>
            Edit
          </Button>
        ) : (
          <Button onClick={addItemLocal} variant='primary'>
            Add
          </Button>
        )}
      </Form>
      {loading ? <p>Loading...</p> : null}
      <ul>
        {todos ? (
          todos.map((item, index) => {
            return (
              <li
                onDoubleClick={() => {
                  setValueNameEdit(item.name);
                  setValueDes(item.description);
                  setisEdit(item.id);
                }}
                style={{
                  cursor: 'pointer',
                  backgroundColor: '#f8f8f8',
                  margin: '10px',
                  padding: '10px',
                }}
                key={index}
              >
                {isEdit && isEdit === item.id ? (
                  <input
                    value={valueNameEdit}
                    onChange={(e) => {
                      setValueNameEdit(e.target.value);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        editLocal(isEdit);
                        // editTodo(isEdit);
                      }
                    }}
                    onBlur={() => {
                      editTodo(isEdit);
                    }}
                    type='text'
                  />
                ) : (
                  <div>
                    <p>
                      {item.name} -{' '}
                      <span
                        onClick={() => deleteLocal(item.id)}
                        className='deleteData'
                      >
                        Delete
                      </span>
                    </p>
                    <i>{item.description}</i>
                  </div>
                )}
              </li>
            );
          })
        ) : (
          <p>Loading</p>
        )}
      </ul>

      {error && <p>{error}</p>}
    </div>
  );
}
