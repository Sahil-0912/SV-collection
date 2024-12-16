import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import Header from './Layouts/Header'
import Products from './Pages/Products'
import HomePage from './Pages/HomePage'
import Product from './Pages/Product'
import Signup from './Authentication/Signup'
import Signin from './Authentication/Signin'
const App = () => {
  return (
    <div>
      <Routers>
        <Header />
        <Routes>
          <Route path='/' element={< HomePage />}></Route>
          <Route path='products' element={<Products />}></Route>
          <Route path='products/:id' element={<Product />}></Route>
          <Route path='signup' element={<Signup />}></Route>
          <Route path='signin' element={<Signin />}></Route>
        </Routes>
      </Routers>
    </div>
  )
}

export default App
