import React from 'react';
import {Card, Button, Row} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {deletePost, filterPost} from '../feature/postSlice';

export default function Post() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    dispatch(deletePost(id));
  };
  const filter = () => {
    dispatch(filterPost(3));
  };

  return (
    <div>
      <h1>Post list</h1>
      <Button onClick={filter}>Filter post</Button>
      <Row>
        {posts.map((item, index) => {
          return (
            <Card key={item.id} style={{width: '18rem', marginRight: '10px'}}>
              <Card.Img variant='top' src='holder.js/100px180' />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.content}</Card.Text>
                <Button onClick={() => deleteItem(item.id)} variant='danger'>
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
