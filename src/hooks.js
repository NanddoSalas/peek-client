import { useMutation } from '@apollo/react-hooks';
import { LOGOUT } from './graphql/mutations';

const useLogout = () => {
  const [Logout] = useMutation(LOGOUT);

  const logout = async () => {
    await Logout();
  };

  return logout;
}

export { useLogout };
