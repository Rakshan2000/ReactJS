import { useDispatch, useSelector } from "react-redux";
import {
  handleBlog,
  handleAddBlogAction,
  setBlogListOnInitialLoad,
  deleteBlog,
  EditBlog,
  cancelEditBlog,
  saveEditedBlog
} from "../store/slices/blogSlice";
import { useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";

function addNewBlog() {
  const state = useSelector((state) => state);
  const { blog } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setBlogListOnInitialLoad({
        blogList: JSON.parse(localStorage.getItem("blogList")) || [],
      })
    );
  }, []);

  function onChangeInput(event) {
    dispatch(
      handleAddBlogAction({
        [event.target.name]: event.target.value,
      })
    );
  }

  function handleBlogSubmit(event) {
    event.preventDefault();
    dispatch(handleBlog());
  }

  function deleteThisBlog(item) {
    dispatch(deleteBlog({ id: item.id }));
  }

  function handleBlogEdit(item) {
    dispatch(EditBlog({item}));

    dispatch(
      handleAddBlogAction({
        title: item.title,
        description: item.description,
      })
    );
  }

  function CancelEditBlog(){
    dispatch(cancelEditBlog());
  }

  return (
    <>
      <h2 className="text-2xl p-5 font-medium">UPLOAD YOUR BLOG</h2>
      <form className="grid grid-cols-2 p-5" onSubmit={handleBlogSubmit}>
        <label className="pr-5">Blog Name</label>
        <input
          type="text"
          name="title"
          placeholder="Enter Blog Name"
          id="title"
          className="border-1 rounded-md p-1 text-center"
          value={blog.blogDetails.title}
          onChange={onChangeInput}
        />
        <label className="pr-5 mt-3">Blog Description</label>
        <input
          type="text"
          name="description"
          placeholder="Enter Blog description"
          id="description"
          className="border-1 rounded-md p-1 mt-3 text-center"
          value={blog.blogDetails.description}
          onChange={onChangeInput}
        />
        <button
          type="submit"
          className={`mx-auto mt-10 ${blog?.currentEditedBlogId ? 'col-span-1' : 'col-span-2'}`}
          onClick={()=>{
            blog?.currentEditedBlogId ? dispatch(saveEditedBlog(blog)) : null 
          }}
        >
          {blog?.currentEditedBlogId ? "Edit Blog" : "Add new Blog"}
        </button>
        <button className={` mx-auto mt-10 ${blog?.currentEditedBlogId ? null : 'hidden'} `} onClick={()=>CancelEditBlog()}>
          Cancel Edit
        </button>
          {/* <MdOutlineCancel className={`mt-12 w-20 h-7 ${blog?.currentEditedBlogId ? null : 'hidden'} `} onClick={()=>CancelEditBlog()}/> */}
      </form>

      <h2 className="font-semibold text-4xl mb-3">Blog List</h2>
      <ul>
        {blog.blogList && blog.blogList.length > 0 ? (
          blog.blogList.map((item) => (
            <li key={item.id} className="border-1 rounded-lg p-3 mb-4">
              <h2 className="font-bold text-xl">{item.title}</h2>
              <p>{item.description}</p>
              <div className="flex flex-row justify-center space-x-5 mt-2">
                <button onClick={() => handleBlogEdit(item)}>Edit</button>
                <button onClick={() => deleteThisBlog(item)}>Delete</button>
              </div>
            </li>
          ))
        ) : (
          <h2>Please add a blog!!!</h2>
        )}
      </ul>
    </>
  );
}

export default addNewBlog;
