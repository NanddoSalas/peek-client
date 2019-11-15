import { useMutation } from '@apollo/react-hooks';
import { LOGOUT } from './graphql/mutations';

const useLogout = () => {
  const [Logout, { client }] = useMutation(LOGOUT);

  const logout = async () => {
    await Logout();
    client.resetStore();
  };

  return logout;
}

export { useLogout };
