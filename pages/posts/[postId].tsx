import {MainLayout} from '../../components/MainLayout';
import axios from 'axios';
import Comments from '../../components/Comments';
import CreateComment from '../../components/CreateComment';
import {NextPageContext} from "next";
import {MyPost} from "../../interfaces/interfaces";
import React from 'react';
import {Heading, Jumbotron} from '../../styles/styled';

interface PostPageProps {
    post: MyPost
}

const Post: React.FC<PostPageProps> = ({ post }) => {
  return (
    <MainLayout title={`Страница сообщения #${post.id}`}>
      <Heading>Страница сообщения #{post.id}</Heading>
      <Jumbotron>
        <h2>{post.title}</h2>
        <p className="lead">{post.body}</p>
        <hr />
        {
          post.comments.length
            ? <Comments comments={post.comments}/>
            : <p className='text-center'>Комментариев нет...</p>
        }
        <hr />
        <CreateComment id={post.id} />
      </Jumbotron>
    </MainLayout>
  )
};


export async function getServerSideProps({ query }: NextPageContext) {
  const response = await axios.get(`https://simple-blog-api.crew.red/posts/${query.postId}?_embed=comments`);
  const post: MyPost = response.data;
  return {props: {post}}
}

export default Post;
