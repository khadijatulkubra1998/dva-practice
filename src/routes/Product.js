import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';
import ProductEdit from '../components/ProductEdit';
const Products = ({ dispatch,products, }) => {
    function handleDelete(id) {
        dispatch({ type: 'products/delete', payload: id, });
    }
    function handelAdded(id) {
        dispatch({type: 'products/added', payload: id,})
    }
    return (
        <div >
            <h2> List of Products </h2 >
            <ProductList onDelete={handleDelete} products={products.products} />
            <ProductEdit onSubmited={handelAdded} products={products.products.name}/>
        </div >
    );
};

export default connect(({ products }) => ({ products, }))(Products);