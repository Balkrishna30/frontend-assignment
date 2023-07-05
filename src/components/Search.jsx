import React, { useState, useEffect } from 'react';
import '../style/search.css';
import { Link } from 'react-router-dom';
function Search() {
  const [productList, setProductList] = useState([]);
  const [searchvalue, setValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProductList(data);
    };
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
   
  };

  return (
    <div className='search'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='searchvalue'
          value={searchvalue}
          onChange={(event) => setValue(event.target.value)}
          placeholder='Search products...'
        />
        <input type='submit' value='Submit' />

        {productList
          ? searchvalue && productList
              .filter((item) => item.title.toLowerCase().includes(searchvalue.toLowerCase()))
              .map((item) => (
                <div key={item.id}>
                  <Link to={`/productdetail/${item.id}`}>{item.title}</Link>
                </div>
              ))
          : null}
      </form>
    </div>
  );
}

export default Search;
