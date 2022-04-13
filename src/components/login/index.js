import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { routerRedux } from 'dva/router';
import style from './style.less';

const LoginPage = (props) => {

  const handleSubmit = (values) => {
    console.log('登录信息 ', values);
    if (values.username === 'admin') {
      message.success('登录成功，即将跳转...', 2);
      setTimeout(() => {
        props.dispatch(routerRedux.push('/home'))
      }, 2000);
    }

  };

  return (
    <div className={style.login}>
      <div class="container">
        <Form onFinish={handleSubmit} className="login-form">
          <div class="brand-logo"></div>
          <div class="brand-title">小土豆</div>
          <Form.Item name="username" rules={[{ required: true, message: '请输入用户名！' }]}>
            <Input class="input" className={style.loginInput} placeholder="用户名" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码！' }]}>
            <Input
              class="input"
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked" initialValue>
            <div className="login-form-forgot">
              <a className="login-form-a" href="">
                忘记密码
              </a>
              <a className="login-form-a" href="">
                立即注册
              </a>
            </div>

            <Button type="primary" htmlType="submit" className="button">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
