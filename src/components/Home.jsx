import React, { useEffect, useState } from 'react';
import Search from '../components/Search'
import  '../style/home.css'
const Home = () => {
    const [productList , setData] = useState()
    useEffect(()=>{
            const product= async()=>{
              const response =  await fetch("https://fakestoreapi.com/products")
                    const data =  await response.json()
                   setData(data)
            }
            product()
    },[])
  return (
    <>
    <Search/>

   {
    productList  ? 
        productList.map((item)=>(
<               div key={item.id}  className='product_wrapper'>
                    <h2>{item.id}</h2>
                    <h1>{item.title}</h1>
                    <img src={item.image} alt="" style={{width:'200px'}} />
                    <h4>{item.description}</h4>
                    <h1> $ {item.price}</h1>
                    
                </div>
         ) )
        : 
    (<div>Loading....</div>)
   }


    </>
  )
}

export default Home