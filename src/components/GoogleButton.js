import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from '@reach/router';
import { useMutation } from '@apollo/react-hooks';
import { GOOGLE_AUTH } from '../graphql/mutations';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const CLIENT_ID =
  // eslint-disable-next-line no-undef
  process.env.REACT_APP_GOOGLE_CLIENT_ID ||
  '290064183960-bdjqgrc2ut1ta4vc85iu22f1s1qhn1he.apps.googleusercontent.com';

function GoogleButton({ fullWidth }) {
  const [googleAuth, setGoogleAuth] = useState(null);
  const [requestAuth, { loading, error, data }] = useMutation(GOOGLE_AUTH);

  const handleSuccess = (googleUser) => {
    const token = googleUser.getAuthResponse().id_token;
    requestAuth({ variables: { token } });
  };

  const handleClick = () => {
    googleAuth
      .signIn()
      .then(handleSuccess)
      .catch(() => {});
  };

  useEffect(() => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2
        .init({
          client_id: CLIENT_ID,
          scope: 'profile',
        })
        .then((ga) => setGoogleAuth(ga));
    });
  }, []);

  if (!loading && !error && data) {
    return <Redirect from="/login" to="/" noThrow />;
  }

  return (
    <Button
      type="button"
      color="secondary"
      variant="contained"
      onClick={handleClick}
      fullWidth={fullWidth}
      disabled={!googleAuth}
      startIcon={<FontAwesomeIcon icon={faGoogle} />}
    >
      Continue with Google
    </Button>
  );
}

GoogleButton.defaultProps = {
  fullWidth: false,
};

GoogleButton.propTypes = {
  fullWidth: PropTypes.bool,
};

export { GoogleButton };
