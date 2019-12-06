import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AuthRoute } from './components/AuthRoute';
import { Main } from './components/Main';
import { Router } from '@reach/router';
import { Login } from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Router>
          <AuthRoute path="/" component={Main} />
          <Login path="/login" />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
