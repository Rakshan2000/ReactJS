
import { Link, Route, Routes, useNavigate, useRoutes } from 'react-router-dom'
import './App.css'
import Receipe from './pages/recipes'
import CommentsList from './pages/comments'
import RecipeDetails from './pages/recipe-details'
import NotFound from './pages/notfound'
import ReactHookFormExamplePage from './pages/react-hook-form-examples'



function CustomRoutes(){ 
  const element = useRoutes([
    {path:'/recipe-list',element: <Receipe/>},
    {path:'/comment-list',element: <CommentsList/>},
    {path: '/recipe-details/:id', element: <RecipeDetails/>},
    {path:'*', element:<NotFound/>},
    {path:'/login', element:<ReactHookFormExamplePage/>}
  ]);

  return element;
}

function App() {
  const navigate = useNavigate(); 

  return (
    <>
      <h1>React Routing and Custom Hooks</h1>

      <button onClick={()=>{
        navigate('/recipe-list')
      }}>Recipes</button>
      <button onClick={()=>{
        navigate('/comment-list')
        }}>Comments</button>
        <Link to='/recipe-list'><button>Alternative Comments</button></Link>
      {/* <Routes>
        <Route path='/recipe-list' element={<Receipe/>}/>
        <Route path='/comment-list' element={<CommentsList/>}/>
        <Route path='/recipe-details/:id' element={<RecipeDetails/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes> */}
      <CustomRoutes/>
    </>
  )
}

export default App
