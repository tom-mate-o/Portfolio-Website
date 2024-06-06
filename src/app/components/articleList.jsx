import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticlePreview from './articlePreview';

const ArticleList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios(
        'http://public-api.wordpress.com/rest/v1/sites/tomkrablog.wordpress.com/posts'
      );
      setPosts(result.data.posts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="article-list">
      {posts.map((post) => (
        <ArticlePreview key={post.ID} post={post} />
      ))}
    </div>
  );
};

export default ArticleList;
