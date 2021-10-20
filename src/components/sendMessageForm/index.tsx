import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';
import { useAuth } from '../../contexts/auth';
import styles from './styles.module.scss';

export const SendMessageForm = (): JSX.Element => {
  const { user } = useAuth();

  return (
    <div className={styles.sendMessageFormWrapper}>
      <button className={styles.signOutButton}>
        <VscSignOut size="32" />
      </button>

      <header className={styles.userInformation}>
        <div className={styles.userImage}>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>

        <strong className={styles.userName}>{user?.name}</strong>

        <span className={styles.userGithub}>
          <VscGithubInverted size={16} />
          {user?.login}
        </span>
      </header>

      <form action="" className={styles.sendMessageForm}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          placeholder="Qual sua expectativa para o evento?"
          name="message"
          id="message"
        ></textarea>

        <button type="submit">Enviar mensagem</button>
      </form>
    </div>
  );
};
