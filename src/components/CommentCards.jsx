// components/CommentCard.jsx
// ::: 각각의 댓글 부분
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteComment } from '../modules/Commons';

const CommentCards = ({card}) => {
  console.log(card.writer)
  
  const dispatch = useDispatch();
  

  const onDeleteComment = (e) => {
    e.preventDefault();
    dispatch(deleteComment(card.id))
  console.log(card)
  }

  console.log("deleteComment :",card.id)

  return (
    <StCommentCardWrap key={card.id}>
          <div>
            {card.writer}
          </div>
          <div>
            {card.message}
          </div>
          <div>
            <button>
              수정하기
            </button>
          </div>
          <div>
            <button
            onClick = {onDeleteComment}
            >
              삭제하기
            </button>
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

