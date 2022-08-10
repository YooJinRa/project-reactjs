// components/CommentCard.jsx
// ::: 각각의 댓글 부분
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CommentCards = ({card}) => {
  console.log(card.writer)
  
  return (
    <StCommentCardWrap key={card.id}>
      {console.log(card.id)}
          <div>
            {card.writer}
          </div>
          <div>
            {card.message}
          </div>
    </StCommentCardWrap>
  )
}

export default CommentCards;

const StCommentCardWrap = styled.div`
  background-color: white;
  border : 5px solid gray;
  margin : 10px;

`

