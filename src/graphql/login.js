import * as yup from 'yup';
import gql from 'graphql-tag';

const loginSchema = yup.object({

  username: yup.string()
    .required('Username is required'),

  password: yup.string()
    .required('Password is required'),

});

const LOGIN = gql`
mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    id
  }
}
`;

export { loginSchema, LOGIN };
