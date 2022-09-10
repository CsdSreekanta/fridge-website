import React from 'react';
import useProducts from '../../hooks/useProducts';
import Details from '../Details/Details';

const Review = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
             <div className=' mt-12 p-3 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 '>
         {
            products.map(product=><Details key={product.id} product={product}></Details>)
         }
           </div>
        </div>
    );
};

export default Review;