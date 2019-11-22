import React from 'react';
import { Link, Redirect } from '@reach/router';
import { useMutation } from '@apollo/react-hooks';
import { loginSchema, LOGIN } from '../graphql/login';

import { Button, FormControl, Typography } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextFormField } from './Fields';
import { FormPaper } from '../containers';
import { Divider } from './utils';

function LoginForm() {
  const [login, { error, loading, data }] = useMutation(LOGIN);

  const handleSubmit = async (values, { setErrors }) => {
    try {
      await login({ variables: values });
    } catch (err) {
      setErrors({
        password: 'Invalid Credentials',
      });
    }
  };

  if (!error && data) return <Redirect from="/login" to="/" noThrow />;

  return (
    <FormPaper>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '16px',
        }}
      >
        <Typography variant="h3">Login</Typography>
      </div>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormControl fullWidth margin="normal">
            <Field
              name="username"
              label="Username"
              variant="outlined"
              component={TextFormField}
              error={!!error}
              disabled={!!loading}
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <Field
              name="password"
              label="Password"
              variant="outlined"
              component={TextFormField}
              type="password"
              error={!!error}
              disabled={!!loading}
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={!!loading}
            >
              login
            </Button>
          </FormControl>

          <Divider />

          <FormControl fullWidth margin="normal">
            <Typography variant="h6" style={{ textAlign: 'center' }}>
              Do not have an account yet?
            </Typography>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <Button variant="contained" style={{ width: '100%' }}>
                signup
              </Button>
            </Link>
          </FormControl>
        </Form>
      </Formik>
    </FormPaper>
  );
}

export { LoginForm };
