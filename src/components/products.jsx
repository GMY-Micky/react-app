import React from 'react';


export default function Products(props) {

    return (
        <div>
            <ul>
                {props.products.map((product) => 
                <li key={product.id}>{product.title} 
                <p>price {product.price}</p>
                </li>
                )}
            </ul>
        </div>
    );
}
