import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PAGE_SIZE } from './constants';
import { ProductCard } from './productCard';  
import { PaginationComponent } from './paginationComponent';

function Pagination() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    useEffect(() => {
      axios.get('https://dummyjson.com/products?limit=500')
        .then(response => setProducts(response.data.products))
        .catch(err => setError(err));
    }, []); // Only run once on mount
    console.log(products);

      const totalProducts = products.length;
      const noOfPages = Math.ceil(totalProducts/PAGE_SIZE);
      console.log(noOfPages);
      const start = currentPage * PAGE_SIZE;
      const end = start + PAGE_SIZE;
      console.log(currentPage);
  
  return (
    <div>
        <h3>Pagination</h3>
        {error && <p>Error: {error.message}</p>}
          {products.length === 0 ? 'No products found' : 
          <>
            <div className='products-container'>
              {products && (products.slice(start,end)).map(product => 
                <ProductCard key={product.id} image= {product.thumbnail} title={product.title}/>
              )}
            </div>
            <PaginationComponent currentPage={currentPage} setCurrentPage={setCurrentPage} noOfPages={noOfPages}/>
          </>
        }
    </div>
  )
}

export default Pagination;