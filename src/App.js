import React, { Component } from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import './App.less';
import Home from "./view/home";
import About from "./view/about";
import ErrorPage from './components/errorPage'

const { Header, Sider, Content } = Layout

class App extends Component {
  state = {
    collasped: false
  };
  toogle = () => {
    this.setState({
      collasped: !this.state.collasped
    })
  };
  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content>
            <BrowserRouter>
                <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/about" component={About} />
                  <Route component={ErrorPage} />
                </Switch>
            </BrowserRouter>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
