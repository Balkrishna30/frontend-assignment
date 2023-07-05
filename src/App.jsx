import React from 'react'
import Home from './components/Home'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import Productdetail from './components/Productdetail';
function App() {
  return (
    <div>
  <BrowserRouter>
  <Routes>
  < Route path='/'  element={<Home/>}/>
   < Route path='/productdetail/:id'  element={<Productdetail/>}/>

  </Routes>
  </BrowserRouter>
      
    </div>
  )
}

export default App