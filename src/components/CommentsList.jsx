// components/CommentsList.jsx
// ::: 댓글 리스트 부분
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getComments } from '../modules/Commons';

import styled from 'styled-components';
import CommentCards from './CommentCards';



const CommentsList = () => {
  const dispatch = useDispatch();
  const commentsList = useSelector((state) => state.commonsReducer );

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch])

  return (
    <StCommentsListWrap>
      {commentsList.map((card) => (
        <CommentCards key={card.id} card={card}/>
        )
  )
}
    </StCommentsListWrap>
)
}
export default CommentsList;

const StCommentsListWrap = styled.div`
  background-color: var(--sub-color);
`

