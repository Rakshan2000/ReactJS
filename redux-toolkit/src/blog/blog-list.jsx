import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";
import { setBlogListOnInitialLoad } from "../store/slices/blogSlice";


function blogList(){

    const navigate = useNavigate();
    const state = useSelector((state)=> state);
    const {blog} = state;
    const dispatch = useDispatch();
    

    useEffect(()=>{ 
        dispatch(setBlogListOnInitialLoad({
            blogList: JSON.parse(localStorage.getItem('blogList')) || []
        }))
    },[])
    return(<>
        <h1 className="mb-5 p-5">Blog List</h1>
        <ul>
        {blog.blogList && blog.blogList.length > 0 ? (
          blog.blogList.map((item) => (
            <li key={item.id} className=" w-full h-auto border-1 rounded-xl p-3 mb-5">
              <h2 className="font-bold text-xl">{item.title}</h2>
              <p>{item.description}</p>
            </li>
          ))
        ) : (
          <h2>Please add a blog!!!</h2>
        )}
      </ul>
        <button onClick={()=> navigate('/addblog')} className="mt-10 hover:bg-black">Add New Blog</button>
    </>);
}

export default blogList;