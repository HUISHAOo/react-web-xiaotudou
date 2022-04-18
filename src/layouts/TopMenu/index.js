import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;


const BasicLayout = ({ route, children }) => (
  <Layout>
    <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff' }}>
      <div className="logo" />
      <Menu style={{ color: '#ff9800', background: '#fff' }} mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">首页</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      {children}
      {/* <MainFooter></MainFooter> */}
    </Content>
    <Footer style={{ textAlign: 'center' }}>xiaotudou ©2022 Created by hxr</Footer>
  </Layout>
);

export default BasicLayout;
