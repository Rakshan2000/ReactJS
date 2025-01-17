import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassBasedComponent from './components/class-based-component'
import FunctionalComponent from './components/fuctional-component'
import ProductList from './components/Products/Index'
import Users from './components/Users/'
import Themetext from './components/context-components/text'
import ThemeButton from './components/context-components/button'
import ReducerExample1 from './components/Reducer/Example1'
import ReducerExample2 from './components/Reducer/Example2'
import Form from './components/form'
import Login from './components/Register/login'
import Register from './components/Register/SignIn'

function App() {

  const dummyProductData = ['Product 1', 'Product 2', 'Product 3'];

  return (
    <>
      <div>
        <h1>React Concepts 2025</h1>
        {/* <ClassBasedComponent/> */}
        {/* <FunctionalComponent/> */}
        {/* <ProductList dummyProductData={dummyProductData} name='Rakshan C K' city='Coorg'/> */}
        {/* <Users/> */}
        {/* <ThemeButton/>*/}
        {/* <Themetext/> */}
        {/* <ReducerExample1/> */}
        {/* <ReducerExample2/> */}
        {/* <Form/> */}
        {/* <Login/> */}
        <Register/>
      </div>
    </>
  )
}

export default App
