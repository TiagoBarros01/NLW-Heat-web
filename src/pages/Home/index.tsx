import { LoginBox } from '../../components/LoginBox';
import { MessageList } from '../../components/messageList';
import { SendMessageForm } from '../../components/sendMessageForm';
import { useAuth } from '../../contexts/auth';
import styles from './styles.module.scss';

export const Home = (): JSX.Element => {
  const { user } = useAuth();

  return (
    <main
      className={`${styles.contentWrapper} ${
        !!user ? styles.contentSigned : ''
      }`}
    >
      <MessageList />
      {!!user ? <SendMessageForm /> : <LoginBox />}
    </main>
  );
};
