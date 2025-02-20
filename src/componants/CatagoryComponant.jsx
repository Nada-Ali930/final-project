import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import { Link } from 'react-router-dom';

export default function Brands() {
  const [catagories, setCatagories] = useState([]);  
  const [isLoading, setIsLoading] = useState(true);  
  const [error, setError] = useState(null);  

  
  useEffect(() => {
    axios
      .get('https://ecommerce.routemisr.com/api/v1/categories')
      .then((response) => {
        setCatagories(response.data.data);  
        setIsLoading(false);  
      })
      .catch((error) => {
        setError('Error loading brands');
        setIsLoading(false);  
      });
  }, []);

  if (isLoading) return <Loading></Loading>
  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen p-8">
      
      <h1 className="text-3xl font-semibold text-center mb-8">Discover Our Catagories</h1>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {catagories.length? (
          catagories.map((cat) => (
            <div
              key={cat._id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              
              <img
                src={cat.image }
                alt={cat.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              
              <h2 className="text-xl font-bold text-center mb-4">{cat.name}</h2>
              <div className="flex justify-center mt-4">
              <Link to={`/categories/${cat._id}`} className='text-gray-400 m-auto'>View Products <i className="fa-solid fa-chevron-right"></i></Link>
              </div>
              </div>
          ))
        ) : (
          <div>No Catagories available.</div>
        )}
      </div>
    </div>
  );
}   
