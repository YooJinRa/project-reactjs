// components/PostRivese.jsx
// ::: 게시글 수정 부분
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { __updateContent } from '../modules/Commons';

import styled from 'styled-components';


const PostRivese = ({ post, updateFormWrap, buttonUpdate }) => {
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

  // ::: 수정된 게시글 저장
  const onUpdatePost = (event) => {
    event.preventDefault();
    if (inputs.title !== '' || inputs.text !== '') {
      const updateContent = {
        part: 'posts',
        id: post.id,
        title: inputs.title,
        text: inputs.text
      }
      dispatch(__updateContent(updateContent));
      setInputs({
        title:'',
        text:''
      });
      buttonUpdate.current.isOpen = false;
      updateFormWrap.current.togglerevise = false;
      updateFormWrap.current.classList.add('hideBox');
      updateFormWrap.current.classList.remove('showBox');
    } else {
      console.log('내용을 입력해주세요.');
    }
  }

  return (
    <StPostRiveseWrap>
      <form action='' onSubmit={onUpdatePost}>
        <label>TITLE</label>
        <input type='text' name='title' value={title} onChange={onChangeInputs} />
        <label>TEXT</label>
        <input type='text' name='text' value={text} onChange={onChangeInputs} />
        <button>Complete</button>
      </form>
    </StPostRiveseWrap>
  )
}

export default PostRivese;

const StPostRiveseWrap = styled.div`
  padding: 30px;
`

