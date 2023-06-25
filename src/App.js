import React from 'react'
import {Routes, Route} from 'react-router-dom'


import Navigation from './components/routes/navigation/navigation-component'
import HomePage from './components/routes/home/homepage-component'
import './App.css'
import Authentication from './components/authentication/authentication-component'
import Shop from './components/routes/shop/shop-component'
import { Checkout } from './components/checkout/checkout-component'




const App = () => {
    return(
      <Routes>
          <Route path='/' element={<Navigation />}>
              <Route index element={<HomePage/>}/>
              <Route path='shop' element={<Shop/>}/>
              <Route path='auth' element={<Authentication />}/>
              <Route path='checkout' element={<Checkout/>}/>
              
          </Route>
      </Routes>
    )
}

export default App;
