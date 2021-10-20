import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { IUser } from '../../@types/User';

interface IMessage {
  created_at: string;
  id: string;
  message: string;
  user_id: string;
  user: IUser;
}

export const MessageList = (): JSX.Element => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get<IMessage[]>('messages/last-three');

      setMessages(data);
    })();
    try {
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile2021" />

      <ul className={styles.messageList}>
        {messages.map((message) => (
          <li key={message.id} className={styles.message}>
            <p className={styles.messageContent}>{message.message}</p>
            <div className={styles.messageUser}>
              <div className={styles.userImage}>
                <img src={message.user.avatar_url} alt={message.user.name} />
              </div>
              <span>{message.user.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
