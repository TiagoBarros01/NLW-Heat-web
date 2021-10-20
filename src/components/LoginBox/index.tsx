import styles from './styles.module.scss';
import { VscGithubInverted } from 'react-icons/vsc';
import { useEffect } from 'react';
import { api } from '../../services/api';
import { IUser } from '../../@types/User';

interface IAuthResponse {
  token: string;
  user: IUser;
}

export const LoginBox = (): JSX.Element => {
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=edcb8c77ba41a6ce5910`;

  const signIn = async (githubCode: string) => {
    const response = await api.post<IAuthResponse>('authenticate', {
      code: githubCode,
    });

    const { token, user } = response.data;

    localStorage.setItem('@DoWhile:authToken', token);

    console.log(user);
  };

  useEffect(() => {
    const URL = window.location.href;
    const hasGithubCode = URL.includes('?code=');

    if (!hasGithubCode) {
      console.log('Você nã está autenticado');
      return;
    }

    const [urlWithoutCode, githubCode] = URL.split('?code=');

    window.history.pushState({}, '', urlWithoutCode);

    signIn(githubCode);
  }, []);

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
