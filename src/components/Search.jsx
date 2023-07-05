import React, { useState, useEffect } from 'react';
import '../style/search.css';
import { Link } from 'react-router-dom';
function Search() {
  const [productList, setProductList] = useState([]);
  const [searchvalue, setValue] = useState('');

  useEffect(() => {
    const fetchData = () => {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
          setProductList(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
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
          placeholder='Search products...' style={{width: '400px'}}
        />
        <div className='search_wrapper'>
        {productList
          ? searchvalue && productList
              .filter((item) => item.title.toLowerCase().includes(searchvalue.toLowerCase()))
              .map((item) => (
               <div key={item.id} className='search_item'>
  <Link to={`/productdetail/${item.id}`} className='link'>
    {item.title}
  </Link>
</div>

               
              ))
          : null}
          </div>
      </form>
    </div>
  );
}

export default Search;
