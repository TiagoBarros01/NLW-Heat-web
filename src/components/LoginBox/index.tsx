import styles from './styles.module.scss';
import { VscGithubInverted } from 'react-icons/vsc';
import { IUser } from '../../@types/User';
import { useAuth } from '../../contexts/auth';

export const LoginBox = (): JSX.Element => {
  const { signInUrl, user } = useAuth();

  console.log({ user });

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe a sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size={24} />
        Entrar com Github
      </a>
    </div>
  );
};
