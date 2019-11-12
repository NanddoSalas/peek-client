import React from 'react';
import { Link, Redirect } from '@reach/router';
import { useMutation } from '@apollo/react-hooks';
import { loginSchema, LOGIN } from "../graphql/login";

import { Button, FormControl } from '@material-ui/core';
import { Formik, Form, Field } from "formik";
import { TextFormField } from './Fields';
import { FormPaper } from '../containers';
import { Divider } from './utils';

function LoginForm() {
  const [login, { error, loading, data }] = useMutation(LOGIN);

  const handleSubmit = async (values, { setErrors }) => {
    try {
      const res = await login({ variables: values });
      console.log(res)
    } catch (err) {
      setErrors({
        password: 'Invalid Credentials',
      });
    }
  }

  if (!error && data) return <Redirect from="/login" to="/" noThrow />

  return (
    <FormPaper>
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
            >login</Button>
          </FormControl>

          <Divider />

          <FormControl fullWidth margin="normal">
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
