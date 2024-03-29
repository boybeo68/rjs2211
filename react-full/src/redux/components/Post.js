import React, {useEffect, useState} from 'react';
import {Card, Button, Row} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import PostStyles from '../../css/Post.module.css';
import '../../css/test.css';
import {
  deletePostAPI,
  filterPost,
  getListPost,
  resetPost,
} from '../feature/postSlice';
import Menu from '../../Menu';
import {useNavigate} from 'react-router-dom';

export default function Post() {
  const posts = useSelector((state) => state.posts);
  const userReducer = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [postLocal, setPostLocal] = useState(null);
  const deleteItem = (id) => {
    dispatch(deletePostAPI(id));
  };

  useEffect(() => {
    setPostLocal(posts);
  }, [posts]);

  useEffect(() => {
    console.log('bb user', userReducer.token);
    dispatch(getListPost());
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

  const gotoDetail = (id, name) => {
    navigate(`/post/${id}/${name}`);
  };

  return (
    <div>
      <Menu />
      <h1 className={PostStyles.error}>Post list</h1>
      <h1 className={'bgBlue'}>Post 2</h1>
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
                    <Button
                      onClick={() => gotoDetail(item, posts.data[item].title)}
                    >
                      GotoDetail
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
                    <Button
                      onClick={() => gotoDetail(item, posts.data[item].title)}
                    >
                      GotoDetail
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
      </Row>
    </div>
  );
}
