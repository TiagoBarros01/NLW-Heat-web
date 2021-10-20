import styles from './styles.module.scss';
import { VscGithubInverted } from 'react-icons/vsc'

export const LoginBox = (): JSX.Element => {
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe a sua mensagem</strong>
      <a href="#" className={styles.signInWithGithub}>
        <VscGithubInverted size={24} />
        Entrar com Github
      </a>
    </div>
  );
};
