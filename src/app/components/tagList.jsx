import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ArticlePreview from './articlePreview';
import herobg from '../../img/hero_bg.jpg';

const TagList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [posts, setPosts] = useState([]);
  const { tagSlug } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios(
        `http://public-api.wordpress.com/rest/v1/sites/tomkrablog.wordpress.com/posts?tag=${tagSlug}`
      );
      setPosts(result.data.posts);
    };

    fetchPosts();
  }, [tagSlug]);

  return (
    <div>
      <div className="singlepage__contentContainer">
        <div
          className="singlepage__headerImage"
          style={{
            backgroundImage: `linear-gradient(rgba(96, 92, 78, 0.5), rgba(96, 92, 78, 0.5)), url(${herobg})`,
          }}
        >
          <h1 className="singlepage__headerTitle">Tag: {tagSlug}</h1>
        </div>
        <div className="singlepage__content">
          <div className="article-list">
            {posts.map((post) => (
              <ArticlePreview key={post.ID} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagList;
