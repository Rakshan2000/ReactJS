import "./App.css";
import {Routes, Route } from 'react-router-dom';
import AddNewBlog from "./blog/add-new-blog";
import BlogList from "./blog/blog-list";
import CounterButton from "./counter-example/counter-button";
import CounterValue from "./counter-example/counter-value";

function App() {
  return (
    <>
      <Routes>
        <Route path="/addblog" element={<AddNewBlog/>}/>
        <Route path="/" element={<BlogList/>}/>
      </Routes>
      <div>
        <h1 className="p-5 font-extralight" style={{ fontSize: '15px'}}>Redux Toolkit</h1>
        {/* <CounterButton />
        <CounterValue /> */}
      </div>
    </>
  );
}

export default App;
