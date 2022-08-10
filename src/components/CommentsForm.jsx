// components/CommentsForm.jsx
// ::: 댓글 입력 부분
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import { addComment } from '../modules/Commons';


const CommentsForm = () => {
  // ::: 폼 입력값 관리
  const id = Math.floor(Math.random()*1000 +1);

  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({

    id : 0,
    writer: '',
    message: '',
    postId : "",
  });
  const { writer, message } = inputs;
  
  const onChangeInputs = (event) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (writer === "" || message === "")
    return alert ("내용을 입력하세요.");

    dispatch(addComment({...inputs, id, writer, message}))
  
    setInputs({

      id : 0,
      writer : "",
      message: "",
      postId : "",
    })
  }

  console.log("CommentsForm inputs::", inputs);

  return (
    <StCommentsFormWrap>
      <label>Writer</label>
        <input 
          type='text' 
          name='writer' 
          value={writer} 
          onChange={onChangeInputs} 
          placeholder = "작성자"
        />

        <label>TEXT</label>
        <input 
          type='text' 
          name='message' 
          value={message} 
          onChange={onChangeInputs}
          placeholder = "내용을 입력하세요" 
        />

        <button
          onClick = {onSubmitHandler}
        >ADD</button>
    </StCommentsFormWrap>
  )
}

export default CommentsForm;

const StCommentsFormWrap = styled.div`
  background-color: var(--sub-color);
  padding: 20px;

`

