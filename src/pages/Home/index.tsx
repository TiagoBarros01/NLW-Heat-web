import { LoginBox } from '../../components/LoginBox';
import { MessageList } from '../../components/messageList';
import styles from './styles.module.scss';

export const Home = (): JSX.Element => {
  return (
    <main className={styles.contentWrapper}>
      <MessageList />
      <LoginBox />
    </main>
  )
};
