import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div style={{ display: 'flex', marginTop: 50 }}>
      <div style={{ width: 200 }}>
        <span>剪切</span>
        <span>剪切</span>
        <span>剪切</span>
      </div>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

// export default Products;
export default connect(({ products }) => ({
  products,
}))(Products);
