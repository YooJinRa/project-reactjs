// components/Add.jsx
import React, { useState, useEffect } from 'react';

// ::: 리덕스로 보내기 위해 dispatch 연결, 미들웨어 연결
import { useDispatch } from "react-redux";
import { addContent } from '../modules/Commons';

import AllButton from './Button';

import styled from 'styled-components';

const PostsForm = (size) => {
  

  const dispatch = useDispatch();

  // ::: 폼 입력값 관리
  const [inputs, setInputs] = useState({
    title: '',
    text: ''
  });
  const { title, text } = inputs;
  const onChangeInputs = (event) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  }

  // ::: 추가하기 기능 구현
  const onCreatePost = (event) => {
    event.preventDefault();
    if (inputs.title !== '' || inputs.text !== '') {
      const newContents = { 
        title: inputs.title, 
        text: inputs.text,
      }
      dispatch(addContent(newContents));
      setInputs({
        title: '',
        text: ''
      });
    } else {
      console.log('내용을 입력해주세요.');
    }
  }

  //

  return (
    <StPostsFromWrap action='' onSubmit={onCreatePost}>

        <label>TITLE</label>
        <input 
          type='text' 
          name='title' 
          value={title} 
          onChange={onChangeInputs} 
        />

        <label>TEXT</label>
        <input 
          type='text' 
          name='text' 
          value={text} 
          onChange={onChangeInputs} 
        />

          <AllButton className='buttonAdd' contents='Add' size='sm'></AllButton>

    </StPostsFromWrap>
  ) 
}

export default PostsForm;

const StPostsFromWrap = styled.form`
  text-align: center;
  label {
    color: var(--line-color);
  }
  .buttonAdd {
    display : flex;
  }
`


//