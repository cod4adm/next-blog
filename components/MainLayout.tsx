import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

const Navigation = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export function MainLayout(props) {
  return (
    <>
      <Head>
        <title>{props.title} | Develops Today Blog</title>
        <meta name="keywords" content="develops today, blog, main page" />
        <meta name="description" content="This is Develops Today blog" />
        <meta charSet="utf-8" />
      </Head>

      <nav>
        <Link href={'/'}><a>Главная</a></Link>
        <Link href={'/posts/new'}><a>Создать сообщение</a></Link>
      </nav>
      <main>
        {props.children}
      </main>
    </>
  )
}
