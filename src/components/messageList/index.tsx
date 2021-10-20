import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { IUser } from '../../@types/User';
import { io } from 'socket.io-client';

interface IMessage {
  created_at: string;
  id: string;
  message: string;
  user_id: string;
  user: IUser;
}

const messageQueue: IMessage[] = [];

const socket = io('http://localhost:4000');

socket.on('new_message', (newMessage: IMessage) => {
  messageQueue.push(newMessage);
});

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

  useEffect(() => {
    setInterval(() => {
      if (messageQueue.length > 0) {
        setMessages((prevState) =>
          [messageQueue[0], prevState[0], prevState[1]].filter(Boolean)
        );

        messageQueue.shift();
      }
    }, 2000);
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
