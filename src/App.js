import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import './App.less';
import Home from "./view/home";
import About from "./view/about";
import ErrorPage from './components/errorPage'

const { Header, Sider, Content } = Layout

class App extends Component {
  state = {
    collasped: false,
    menuKey: '/',
  }
  toogle = () => {
    this.setState({
      collasped: !this.state.collasped
    })
  }
  toLink=(e)=>{
    this.setState({
      menuKey:e.key
    })
  }
  //页面渲染前
  componentWillMount() {
    this.setState({
      menuKey:window.location.pathname
    })
  }
  //页面渲染完成
  componentDidMount() {

  }
  //页面更新前
  componentWillUpdate(newprops, oldprops) {
    console.log(newprops, oldprops)
  }
  //页面更新完成
  componentDidUpdate(newprops, oldprops) {
    console.log(newprops, oldprops)
  }
  //页面销毁前
  componentWillUnmount() {

  }
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collasped}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" selectedKeys={[this.state.menuKey]} onClick={this.toLink}>
              <Menu.Item key="/">
                <NavLink to="/" replace>
                  <Icon type="user" />
                  <span>Home</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="/about">
                <NavLink to="/about" replace>
                  <Icon type="video-camera" />
                  <span>About</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>nav 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header>
              <Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toogle} />
            </Header>
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route component={ErrorPage} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
