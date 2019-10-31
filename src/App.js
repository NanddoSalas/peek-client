import React from 'react';
import GlobalStyles from './GlobalStyles';

import { Header } from './components/Header/index';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <Header/>
      </React.Fragment>
    );
  }
}

export default App;
