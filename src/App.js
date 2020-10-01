import React, { Component } from 'react';
import Layout from './Hoc/Layout/Layout'
import ExpenseBuilder from './Containers/ExpenseBuilder/ExpenseBuilder';


class App extends Component {

  state = {
    showAddReciept: false
  }

  hideAddRecieptHandler = () => {
    const doesShow = this.state.showAddReciept;
    this.setState({showAddReciept: !doesShow});
  };
  
  render() {
    return (
      <div>
        <Layout
        hideAddRecieptHandler={this.hideAddRecieptHandler} >
          <ExpenseBuilder showAddReciept={this.state.showAddReciept} />
        </Layout>
      </div>
    );
  }
}

export default App;
