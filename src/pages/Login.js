import React from 'react';
import { Typography } from '@material-ui/core';
import { FormContainer, FormPaper } from '../containers';
import { GoogleButton } from '../components/GoogleButton';

function Login() {
  return (
    <FormContainer>
      <FormPaper>
        <div style={{ padding: '16px 0' }}>
          <Typography variant="h5">To start creating your notes:</Typography>
        </div>
        <GoogleButton fullWidth />
      </FormPaper>
    </FormContainer>
  );
}

export { Login };
