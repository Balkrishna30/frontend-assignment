import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import "../style/home.css";
const Home = () => {
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
    <div className="home_container">
    <div className="search_section">
    <Search />
    </div>
      
      <div className="productList">
        {productList ? (
          productList.map((item) => (
            <div key={item.id} className="product_wrapper">
              <h2>{item.title}</h2>
              <img
                src={item.image}
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
              <h2> $ {item.price}</h2>
            </div>
          ))
        ) : (
          <div>Loading....</div>
        )}
      </div>
    </div>
  );
};

export default Home;
