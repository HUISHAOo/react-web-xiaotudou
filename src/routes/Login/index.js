import React from 'react';

import { Form, Input, Checkbox, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import style from './style.less';

const LoginPage = () => {



  const handleSubmit = (values) => {
    console.log('登录信息 ', values);
    message.success('登录成功，即将跳转...', 2);
    setTimeout(() => {

    }, 2000);
  };

  return (
    <div className={style.pagelogin}>
      <Form onFinish={handleSubmit} className="login-form">
        <div className="login-title">欢迎登录 </div>
        <Form.Item name="username" rules={[{ required: true, message: '请输入用户名！' }]}>
          <Input className={style.loginInput} placeholder="用户名" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码！' }]}>
          <Input
            className={style.loginInput}
            // prefix={<LockOutlined style={{ color: 'rgba(255, 255, 255, 0.8)' }} />}
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

          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
