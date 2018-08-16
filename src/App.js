import React, { Component } from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom'
import { Layout, Menu,Breadcrumb, Icon } from 'antd'
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
          collapsed={this.state.collasped}>
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
          <Header>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toogle}
            />
            {/* <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px',float:'left' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu> */}
          </Header>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
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
