import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Launchpad from "./containers/Launchpad/Launchpad";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Launchpad/>
        </Layout>
      </div>
    );
  }
}

export default App;
