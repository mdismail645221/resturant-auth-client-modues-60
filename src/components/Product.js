import React, { useContext } from 'react';
import { AuthProvider } from '../contexts/UseContext';
import Food from './Food';

const Product = () => {

    const {products} = useContext(AuthProvider)
    return (
        <div>
            <h1>Products</h1>

            {
                products.map((product, idx) => <Food
                    key={product.idx}
                    product={product}
                ></Food>)
            }

        </div>
    );
};

export default Product;