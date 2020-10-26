import {MainLayout} from '../../components/MainLayout';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createPost} from '../../redux/actions';
import React from 'react';
import {Alert, Button, FormGroup, Heading} from '../../styles/styled';

const NewPost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const postCreated = useSelector(state => state.posts.postCreated);
  const dispatch = useDispatch();


  async function submitHandler(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(createPost(title, body));
    setTitle('');
    setBody('');
  }

  return (
    <MainLayout title={'Страница создания сообщения'}>
        {
          postCreated && <Alert>Сообщение успешно создано!</Alert>
        }
        <Heading>Создать сообщение</Heading>
        <form onSubmit={submitHandler}>
          <FormGroup>
            <label htmlFor="title">Название сообщения</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="body">Содержание сообщения</label>
            <input
              type="text"
              id="body"
              value={body}
              onChange={event => setBody(event.target.value)}
            />
          </FormGroup>
          <Button
            type="submit"
            disabled={!title.trim() || !body.trim()}
          >
            Отправить
          </Button>
        </form>
    </MainLayout>
  )
};

export default NewPost;
