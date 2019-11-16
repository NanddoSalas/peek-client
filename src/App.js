import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router } from '@reach/router';

import { LogIn } from './pages/LogIn';
import { SignUp } from './pages/SignUp';

import { AuthRoute } from './components/AuthRoute';
import { Main } from './components/Main';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Router>
          <AuthRoute path="/" component={Main} />
          <LogIn path="login" />
          <SignUp path="signup" />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
