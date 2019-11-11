import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router } from '@reach/router';

import { Header } from './components/Header/index';
import { AuthRoute } from './components/AuthRoute/index';
import { Main } from './components/Main/index';
import { LoginForm } from './components/LoginForm/index';
import { SignupForm } from './components/SignupForm/index';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Router>
          <AuthRoute path="/" component={Main} />
          <LoginForm path="login" />
          <SignupForm path="signup" />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
