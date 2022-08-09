// components/PostCard.jsx
// ::: 각각의 게시글 부분
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const PostCard = ({post}) => {

  return (
    <NavLink to={`/detail/${post.id}`}>
      <StPostCardWrap key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.text}</p>
        <button>DELETE</button>
      </StPostCardWrap>
    </NavLink>
  )
}

export default PostCard;

const StPostCardWrap = styled.div`
  background-color: lemonchiffon;
  margin: 10px;
  border: 1px solid gray;

`

