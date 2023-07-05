import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Productdetail() {
  const { id } = useParams();

  const [productList, setData] = useState();

  useEffect(() => {
    const fetchData = () => {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
          setData(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    };
    fetchData();
  }, []);
  

  return (
    <div>
      {productList ? (
        <div>
          <h2 style={{ color:'black'}} > {productList[id-1].title} </h2>
          <img src={productList[id-1].image} alt="" style={{ width: '200px' }} />
          <h4>{productList[id-1].description}</h4>
          <h1 style={{ color:'black'}} > $ {productList[id-1].price}</h1>
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
}

export default Productdetail;
