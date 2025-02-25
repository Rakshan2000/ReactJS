import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  blogDetails: {
    title: "",
    description: "",
  },
  blogList: [],
  currentEditedBlogId: null,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    handleAddBlogAction: (state, action) => {
      let cpyBlogDetails = { ...state.blogDetails };
      cpyBlogDetails = {
        ...cpyBlogDetails,
        ...action.payload,
      };

      state.blogDetails = cpyBlogDetails;
    },

    handleBlog: (state, action) => {
      state.blogList.push({
        id: nanoid(),
        ...state.blogDetails,
      });

      state.blogDetails = {
        title: "",
        description: "",
      };

      localStorage.setItem("blogList", JSON.stringify(state.blogList));
    },

    setBlogListOnInitialLoad: (state, action) => {
      state.blogList = action.payload.blogList;
    },

    deleteBlog: (state, action) => {
      state.blogList = state.blogList.filter(
        (blog) => blog.id !== action.payload.id
      );
      localStorage.setItem("blogList", JSON.stringify(state.blogList));
    },

    EditBlog: (state, action) => {
      const {item} = action.payload;
      state.currentEditedBlogId = item.id;
    },

    cancelEditBlog: (state, action) => {
      state.currentEditedBlogId = null;
    },

    saveEditedBlog: (state, action) =>{
      const {blogList, currentEditedBlogId} = action.payload;
      console.log(blogList, currentEditedBlogId,"Save Edited Blog")

      state.blogList = blogList.filter((blog) => blog.id !== currentEditedBlogId);
      localStorage.setItem("blogList", JSON.stringify(state.blogList));

    }
  },
});

export const {
  handleAddBlogAction,
  handleBlog,
  setBlogListOnInitialLoad,
  deleteBlog,
  EditBlog,
  cancelEditBlog,
  saveEditedBlog
} = blogSlice.actions;

export default blogSlice.reducer;
