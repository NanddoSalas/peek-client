import React from 'react';
import { getIn } from 'formik';
import { TextField } from '@material-ui/core';

const TextFormField = ({ field, form, error, ...props }) => {
  const errorMessage = getIn(form.touched, field.name) && getIn(form.errors, field.name)
  return (
    <TextField
      {...field}
      {...props}
      helperText={errorMessage}
      error={!!errorMessage || error}
    />
  );
}

export { TextFormField };
