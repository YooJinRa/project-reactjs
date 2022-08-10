// components/Add.jsx
import React from 'react';
import styled from 'styled-components';

const PostsForm = () => {
  // html 만들고-title,text 값 가져와서 db저장하기 위해
  // 액션-액션생성함수-리듀서-미들웨어 통해서 db에 넣고
  // 다시 db에서 가져온 정보를 미들웨어 통해서 리듀서로 갔다가
  // 포스트 리스트로 불러온다.
  // 여기 있어야 하는 건 title,text값 뽑아내기
  // 

  const [inputs, setInputs] = useState({
    file: '',
    title: '',
    text: ''
  });
  const { file, title, text } = inputs;
  const onChangeInputs = (event) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  }



  
  return ( 
    <div>
      <label>사진</label>
      <input
        type="file"
        name="image"
        value={image}
        onChange={onChangeInputs}></input>

      <label>제목</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={onChangeInputs}></input>

      <label
        type="text"
        name="text"
        value={text}
        onChange={onChangeInputs}>제목</label>
      <input></input>

      <button>Add Post</button>
    </div>
  )

export default PostsForm;