import {ListGroup, ListGroupItem} from '../styles/styled';

export default function Comments({ comments }) {
  return (
    <>
      <p>Комментарии:</p>
      <ListGroup>
        {comments.map(comment => (
          <ListGroupItem key={comment.id}>
            { comment.body ? comment.body : 'Кто-то оставил комментарий без текста...'}
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  )
}
