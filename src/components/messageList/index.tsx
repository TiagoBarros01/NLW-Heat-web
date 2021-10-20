import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg';

export const MessageList = (): JSX.Element => {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar o evento, com certeza vau ser o melhor de
            todos os tempos, vamoo pra cima! 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/tiagobarros01.png"
                alt="Tiago Barros"
              />
            </div>
            <span>Diego Fernandes</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar o evento, com certeza vau ser o melhor de
            todos os tempos, vamoo pra cima! 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/tiagobarros01.png"
                alt="Tiago Barros"
              />
            </div>
            <span>Diego Fernandes</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar o evento, com certeza vau ser o melhor de
            todos os tempos, vamoo pra cima! 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/tiagobarros01.png"
                alt="Tiago Barros"
              />
            </div>
            <span>Diego Fernandes</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
