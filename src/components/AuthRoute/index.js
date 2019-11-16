import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from '@reach/router';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const ME = gql`
{
  me {
    id
  }
}
`;

function AuthRoute(props) {
  const { component: Component } = props;
  const { loading, data } = useQuery(ME, { fetchPolicy: 'no-cache' });

  if (loading) return null

  if (!data) return <Redirect from="/" to="login" noThrow />

  if (!data.me) return <Redirect from="/" to="login" noThrow />

  return <Component />
}

AuthRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export { AuthRoute };
