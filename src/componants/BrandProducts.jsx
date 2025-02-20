import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import Loading from './Loading';
import axios from 'axios';
import Productitem from './Productitem';

export default function BrandProducts() {
  const { brandId } = useParams();  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products?brand=${brandId}`)
      .then((response) => {
        setProducts(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError('Error loading products');
        setIsLoading(false);
        console.log(error);
        
      });
  }, [brandId]);

 
  if (isLoading) return <Loading />;
  if (error) return <div>{error}</div>;

  return (
    <div className='container'>
          <div className="flex flex-wrap">
             {products?.map(prod=><Productitem prod={prod} key={prod._id}></Productitem>)}
          </div>
    </div>
    
  );
}