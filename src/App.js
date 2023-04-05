import React from 'react'
import {Routes, Route} from 'react-router-dom'


import Navigation from './components/routes/navigation/navigation-component'
import HomePage from './components/routes/home/homepage-component'
import SignIn from './components/sign-in/sign-in-component'
import './App.css'


const Shop = () => {
  return (
    <div>
      Shop
    </div>
  )
}

const App = () => {
    return(
      <Routes>
          <Route path='/' element={<Navigation />}>
              <Route index element={<HomePage/>}/>
              <Route path='shop' element={<Shop />}/>
              <Route path='sign-in' element={<SignIn />}/>
          </Route>
      </Routes>
    )
}

export default App;
