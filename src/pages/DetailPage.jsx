// pages/PostsPage.jsx
import React from 'react';

// ::: 컨포넌트 연결
import Header from '../components/Header';
import Layout from '../components/Layout';
import PostDetail from '../components/PostDetail';
import CommentsForm from '../components/CommentsForm';
import CommentsList from '../components/CommentsList';

const PostsPage = () => {
  return (
    <Layout>
      <Header />
      <PostDetail />
      <CommentsForm />
      <CommentsList />
    </Layout>
  );
}

export default PostsPage;