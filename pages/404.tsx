import {MainLayout} from '../components/MainLayout';
import classes from '../styles/error.module.scss';

export default function ErrorPage() {
  return (
    <MainLayout title={'Страница не найдена'}>
      <h1 className={classes.error}>Error 404</h1>
      <p>Please go back to safety</p>
    </MainLayout>
  )
}
