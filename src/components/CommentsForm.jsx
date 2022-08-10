// components/CommentsForm.jsx
// ::: 댓글 입력 부분
import React, { useState } from 'react';

import styled from 'styled-components';


const CommentsForm = () => {
  // ::: 폼 입력값 관리
  const [inputs, setInputs] = useState({
    writer: '',
    message: ''
  });
  const { writer, message } = inputs;
  const onChangeInputs = (event) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  }

  return (
    <StCommentsFormWrap>
      <label>Writer</label>
        <input 
          type='text' 
          name='writer' 
          value={writer} 
          onChange={onChangeInputs} 
        />

        <label>TEXT</label>
        <input 
          type='text' 
          name='message' 
          value={message} 
          onChange={onChangeInputs} 
        />

        <button>ADD</button>
    </StCommentsFormWrap>
  )
}

export default CommentsForm;

const StCommentsFormWrap = styled.div`
  background-color: var(--sub-color);
  padding: 20px;

`

