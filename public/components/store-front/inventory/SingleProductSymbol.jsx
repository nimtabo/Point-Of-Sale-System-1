import React, { PropTypes } from 'react';

const SingleProductSymbol = ({ productCategory, handleAddProduct, showReceipt }) => {
  if (productCategory === 'herbal') {

    return <i className="fa fa-leaf fa-4x" onClick={showReceipt ? null : handleAddProduct}></i>;

  } else if (productCategory === 'pharmaceutical') {

    return <i className="fa fa-flask fa-4x" onClick={showReceipt ? null : handleAddProduct}></i>;

  } else {

    return <i className="fa fa-tags fa-4x" onClick={showReceipt ? null : handleAddProduct}></i>;

  }
};

SingleProductSymbol.propTypes = {
  productCategory: PropTypes.string,
  handleAddProduct: PropTypes.func,
  showReceipt: PropTypes.bool
};

export default SingleProductSymbol;
