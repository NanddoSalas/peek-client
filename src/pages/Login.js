import React from 'react';

import { FormContainer, FormPaper } from '../containers';
import { GoogleButton } from '../components/GoogleButton';

function Login() {
  return (
    <FormContainer>
      <FormPaper>
        <GoogleButton fullWidth />
      </FormPaper>
    </FormContainer>
  );
}

export { Login };
