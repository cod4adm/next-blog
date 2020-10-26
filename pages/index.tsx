import {MainLayout} from '../components/MainLayout';
import Link from 'next/link';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getPosts, removePost} from '../redux/actions';
import {MyPost} from "../interfaces/interfaces";
import React from 'react';
import {Button, Card, Heading, ListGroup, ListGroupItem, ListLink} from '../styles/styled';


const Index: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch]);

  const posts: MyPost[] = useSelector((state) => state.posts.posts);

  return (
    <MainLayout title={'Главная страница'}>
        <Heading>Страница всех сообщений</Heading>
        <Card>
          <ListGroup>
            {posts.reverse().map(post => (
              <ListGroupItem key={post.id}>
                <Link href={`/posts/[id]`} as={`/posts/${post.id}`}>
                  <ListLink>{post.title}</ListLink>
                </Link>
                <Button
                  type="button"
                  onClick={() => dispatch(removePost(post.id))}
                >Удалить</Button>
              </ListGroupItem>
            ))}
          </ListGroup>
      </Card>
    </MainLayout>
  )
};

export default Index;
