import {useState} from 'react';
import axios from 'axios';
import {Button, FormGroup} from "../styles/styled";

export default function CreateComment({ id }) {
  const [comment, setComment] = useState('');

  async function addComment(event) {
    const commentData = {
      postId: id,
      body: comment
    };
    await axios.post('https://simple-blog-api.crew.red/comments', commentData);
  }

  return (
    <>
      <form onSubmit={addComment}>
        <FormGroup>
          <label htmlFor="body">Добавить комментарий</label>
          <textarea
            id="body"
            value={comment}
            onChange={event => setComment(event.target.value)}
          />
        </FormGroup>
        <Button
          type="submit"
        >
          Отправить
        </Button>
      </form>
    </>
  )
}
