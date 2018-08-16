import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Col } from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container">
          <div className="row">
            <div className="col-md-12">left 3</div>
            <div className="col-md-11">right 9</div>
          </div>
        </div>
        <Row>
          <Col span={4}>col-4</Col>
          <Col span={6} offset={8}>
            col-8
          </Col>
          <Col span={6}>col-6</Col>
        </Row>
      </div>
    );
  }
}

export default App;
