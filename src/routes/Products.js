import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import Login from '../components/login/index';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  const handleQuery = () => {
    dispatch({
      type: 'products/querylist',
      payload: '',
    }).then(
      res => {
        console.log(res, '555')
      }
    )
  }
  return (
    <div>
      <Login onDelete={handleDelete} products={products} />
    </div>
  );
};

// export default Products;
export default connect(({ products }) => ({
  products,
}))(Products);
