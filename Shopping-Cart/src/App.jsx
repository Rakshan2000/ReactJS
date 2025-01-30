import { Fragment } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import ProductList from './pages/productList'
import ProductDetails from './pages/productDetails'
import CartList from './pages/cartList'

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/productdetails/:id" element={<ProductDetails/>}/>
        <Route path="/cartlist" element={<CartList/>}/>
      </Routes>
    </Fragment>
  )
}

export default App
