import React, { Component } from 'react';
import logo from '../assets/imgs/logo.svg';
import '../assets/css/App.scss';

import AddTodo from './todo/AddTodo.js';
import VisibleTodoList from './todo/TodoList';
import Footer from '../components/footer/footer.js';
//
import { Button } from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
          </div>
        <div>
          <Button>Hello Antd</Button>
        </div>
      </div>
    );
  }
}

export default App;
