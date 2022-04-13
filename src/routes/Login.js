import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import HeadShake from 'react-reveal/Jump';
import LoginCom from '../components/login/index';
import style from './Login.less';


const Login = ({ dispatch, products }) => {
  const handleJump = () => {
    dispatch(routerRedux.push('/home'))
  }
  return (
    <div className={style.box}>
      <HeadShake left>
        <LoginCom dispatch={dispatch} handleJump={handleJump} />
      </HeadShake>
    </div>
  );
};

// export default Products;
export default connect(({ products }) => ({
  products,
}))(Login);
