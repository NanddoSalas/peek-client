import React from "react";
import { Link, Redirect } from '@reach/router';
import { useMutation } from '@apollo/react-hooks';
import { signupSchema, SIGNUP } from '../graphql/signup'
import { getErrors } from '../utilities';

import { Button, FormControl } from '@material-ui/core';
import { Formik, Form, Field } from "formik";
import { TextFormField } from './Fields';
import { FormPaper } from '../containers';
import { Divider } from './utils';

function SignupForm() {
  const [login, { loading, data, error }] = useMutation(SIGNUP);

  const handleSubmit = async (values, { setErrors }) => {
    try {
      await login({ variables: values });
    } catch (response) {
      const errors = getErrors(response);
      setErrors(errors);
    }
  }

  if (!error && data) return <Redirect from="/signup" to="/login" noThrow />

  return (
    <FormPaper>
      <Formik
        initialValues={{ username: '', password: '', password2: '' }}
        validationSchema={signupSchema}
        onSubmit={handleSubmit}
      >
        <Form>

          <FormControl fullWidth margin="normal">
            <Field
              name="username"
              label="Username"
              variant="outlined"
              component={TextFormField}
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
              disabled={!!loading}
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <Field
              name="password2"
              label="Confirm Password"
              variant="outlined"
              component={TextFormField}
              type="password"
              disabled={!!loading}
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={!!loading}
            >signup</Button>
          </FormControl>

          <Divider />

          <FormControl fullWidth margin="normal">
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button variant="contained" style={{ width: '100%' }}>
                login
              </Button>
            </Link>
          </FormControl>

        </Form>
      </Formik>
    </FormPaper >
  );
}

export { SignupForm };
