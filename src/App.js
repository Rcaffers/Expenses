import React, { Component } from 'react';
import Layout from './Hoc/Layout/Layout'
import ExpenseBuilder from './Containers/ExpenseBuilder/ExpenseBuilder';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <ExpenseBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
