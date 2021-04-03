import React from 'react';
import { Layout, Menu, Row } from 'antd';
import Feed from '../Product/Feed';
import './index.less';
// import Head from 'next/head';

const { Header, Footer, Sider, Content } = Layout;

const layout = () => (
  <React.Fragment>
    <Layout>
      <Header className="header">
        <title>Next-Commerce</title>
        <Menu
          mode="horizontal"
          theme="light"
        >
          <Menu.Item></Menu.Item>
          <Menu.Item><span>About</span></Menu.Item>
          <Menu.Item><span>Cart</span></Menu.Item>
          <Menu.Item><span>Sign Up</span></Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout">
        <h1>Welcome to Next-Commerce</h1>
        <p>We only sell the greenest, eco-friendly, chlorophyll</p>

        <Feed/>
        
      </Content>
      <Footer>All products here are just dummy and should not be treated seriously. This site is not responsible for any moneytary loss.</Footer>
    </Layout>
  </React.Fragment>
);

export default layout;