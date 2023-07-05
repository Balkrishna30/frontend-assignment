import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Productdetail() {
  const { id } = useParams();

  const [productList, setData] = useState();

  useEffect(() => {
    const product = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setData(data);
    };
    product();
  }, []);

  return (
    <div>
      {productList ? (
        <div>
          <h1>{productList[id-1].title}</h1>
          <img src={productList[id-1].image} alt="" style={{ width: '200px' }} />
          <h4>{productList[id-1].description}</h4>
          <h1>$ {productList[id-1].price}</h1>
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
}

export default Productdetail;
