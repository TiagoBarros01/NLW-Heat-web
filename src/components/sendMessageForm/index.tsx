import { FormEvent, useRef } from 'react';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';
import { useAuth } from '../../contexts/auth';
import { api } from '../../services/api';
import styles from './styles.module.scss';

export const SendMessageForm = (): JSX.Element => {
  const { user, signOut } = useAuth();

  const messageRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!messageRef.current?.value.trim()) {
      console.log("Message doesn't be empty ");
      return;
    }

    await api.post('messages', {
      message: messageRef.current?.value
    })

    messageRef.current.value = ''

  }

  return (
    <div className={styles.sendMessageFormWrapper}>
      <button onClick={signOut} className={styles.signOutButton}>
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

      <form onSubmit={(event) => handleSubmit(event)} className={styles.sendMessageForm}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          ref={messageRef}
          placeholder="Qual sua expectativa para o evento?"
          name="message"
          id="message"
        ></textarea>

        <button type="submit">Enviar mensagem</button>
      </form>
    </div>
  );
};
