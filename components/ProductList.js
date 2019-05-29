import React from 'react';
import Products from './Products';
import products from './ProductData';

function ProductList() {
    const productComponents = products.map(item => <Products key={item.id} product={item}/>)
    
    return (
        <div>
            {productComponents}
        </div>
    )
}

export default ProductList;
