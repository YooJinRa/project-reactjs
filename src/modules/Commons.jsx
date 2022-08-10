// src/redux/modules/cards.js

// ::: axios(통신역할), Thunk(미들웨어), Reducer 연결
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// ::: Thunk 생성 및 설정, Axios를 사용해 데이터 주고 받기 위해 설정
// ::: json server 포트 설정
const port = '3003';

// ::: [Thunk, Axios] 데이터 받아오기(get)
export const getContents = createAsyncThunk("GET_CONTENTS", async () => {
  const response = await axios.get(`http://localhost:${port}/posts`);
  return response.data;
});

export const getComments = createAsyncThunk("GET_COMMENTS", async () => {
  const response = await axios.get(`http://localhost:${port}/comments`);
  return response.data;
});

// ::: [Thunk, Axios] 데이터 추가하기(post)
export const addContent = createAsyncThunk("ADD_CONTENT", async (newContents) => {
  const respose = await axios.post(`http://localhost:${port}/posts`, {
    title: newContents.title,
    text: newContents.text,
    id : newContents.id,
  });
  console.log(respose.data);
  return respose.data;
});

export const addComment = createAsyncThunk("ADD_COMMENT", async (newComments) => {
  const respose = await axios.post(`http://localhost:${port}/comments`, {
    message: newComments.message,
    writer: newComments.writer,
    id : newComments.id,
    postId : newComments.postId,
  });
  console.log(respose.data);
  return respose.data;
});


// ::: [Thunk, Axios] 데이터 삭제하기(delete)
export const deleteContent = createAsyncThunk("DELETE_CONTENT", async (id) => {
  // eslint-disable-next-line
  const response = await axios.delete(`http://localhost:${port}/posts/${id}`);
  return id;
});

export const deleteComment = createAsyncThunk("DELETE_COMMENT", async (id) => {
  // eslint-disable-next-line
  const response = await axios.delete(`http://localhost:${port}/comments/${id}`)
  
  return id;
});


// ::: [Thunk, Axios] 데이터 수정하기(put)
export const updateContent = createAsyncThunk("UPDATE_Content", 
  async() => {
    // eslint-disable-next-line 
    const response = await axios.put(`http://localhost:${port}/posts/${id}`, {
      // 수정할 부분
    });
    return {
      // reducer로 보낼 부분
    };
  }
);

// [Reducer]
// ::: 스토어 공간에서 어떤 작업을 진행해줄지
export const commonsReducer = createSlice({
  name: 'commons',
  initialState: [ ],
  reducers: { },
  extraReducers: {
    [getContents.fulfilled]: (state, { payload }) => [...payload],
    [getComments.fulfilled]: (state, { payload }) => [...payload],
    [addContent.fulfilled]: (state, { payload }) => [...state, payload],
    [addComment.fulfilled]: (state, { payload }) => [...state, payload],
    [deleteContent.fulfilled]: (state, { payload }) => { },
    [deleteComment.fulfilled]: (state, { payload }) => 
        state.filter((comment)  => comment.id !== payload),

    [updateContent.fulfilled]: (state, {payload}) => { }
  },
});

export default commonsReducer.reducer