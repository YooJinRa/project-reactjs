// components/List.jsx
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContents } from '../modules/Commons';
import PostCard from './PostCard';
import styled from 'styled-components';

const PostsList = () => {
  const dispatch = useDispatch();
  const postsList = useSelector((state) => state.commonsReducer );

  useEffect(() => {
    dispatch(getContents());
  }, [dispatch]);

  return (
    <StPostsListWrap>
      {postsList.map((post) => 
        <PostCard key={post.id} post={post} />
      )}
    </StPostsListWrap>
  )
}

export default PostsList;

const StPostsListWrap = styled.div`
  width:100%;
  background-color: var(--sub-color);

`

