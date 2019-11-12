import * as yup from 'yup';
import gql from 'graphql-tag';

const signupSchema = yup.object({

  username: yup.string()
    .min(3, 'At least 3 characters')
    .max(32, 'Username is to long')
    .matches(/^[a-zA-Z0-9]+$/, 'Letters and digits only.')
    .required('Username is required'),

  password: yup.string()
    .min(3, 'At least 3 characters')
    .max(32, 'Password is to long')
    .required('Password is required'),

  password2: yup.string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password')], 'Password do not match'),

});

const SIGNUP = gql`
mutation Register($username: String!, $password: String!, $password2: String!) {
  register(username: $username, password: $password, password2: $password2)
}
`;

export { signupSchema, SIGNUP };
