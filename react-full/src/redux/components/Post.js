import React, {useEffect, useState} from 'react';
import {Card, Button, Row} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {
  deletePost,
  filterPost,
  getListPost,
  resetPost,
} from '../feature/postSlice';

export default function Post() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [postLocal, setPostLocal] = useState(null);
  const deleteItem = (id) => {
    dispatch(deletePost(id));
  };

  useEffect(() => {
    setPostLocal(posts);
  }, [posts]);

  useEffect(() => {
    dispatch(getListPost('tham so truyen vao'));
  }, []);
  const filter = (rate) => {
    let converPost = JSON.parse(JSON.stringify(postLocal));
    converPost = converPost.filter((i) => i.rate > rate);
    setPostLocal(converPost);
    // dispatch(filterPost(3));
  };
  const filterRedux = (rate) => {
    dispatch(filterPost(rate));
  };

  const reset = () => {
    setPostLocal(posts);
  };
  const resetFilter = () => {
    // setPostLocal(posts);
    dispatch(resetPost());
  };

  return (
    <div>
      <h1>Post list</h1>
      {/* <Button onClick={() => filter(3)}>Filter post State</Button>
      <Button
        style={{marginLeft: '10px', marginRight: '10px'}}
        onClick={() => reset()}
      >
        reset filter
      </Button> */}
      <Button
        style={{marginLeft: '10px', marginRight: '10px'}}
        onClick={() => filterRedux(3)}
      >
        Filter redux
      </Button>

      <Button
        style={{marginLeft: '10px', marginRight: '10px'}}
        onClick={() => resetFilter()}
      >
        Reset filter
      </Button>

      <Row>
        {posts.dataFilter
          ? posts.dataFilter.map((item, index) => {
              return (
                <Card key={item} style={{width: '18rem', marginRight: '10px'}}>
                  <Card.Img variant='top' src='holder.js/100px180' />
                  <Card.Body>
                    <Card.Title>{posts.data[item].title}</Card.Title>
                    <Card.Text>{posts.data[item].content}</Card.Text>
                    <Button onClick={() => deleteItem(item)} variant='danger'>
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              );
            })
          : Object.keys(posts.data).map((item, index) => {
              return (
                <Card key={item} style={{width: '18rem', marginRight: '10px'}}>
                  <Card.Img variant='top' src='holder.js/100px180' />
                  <Card.Body>
                    <Card.Title>{posts.data[item].title}</Card.Title>
                    <Card.Text>{posts.data[item].content}</Card.Text>
                    <Button onClick={() => deleteItem(item)} variant='danger'>
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
      </Row>
    </div>
  );
}
