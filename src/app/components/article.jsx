import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import herobg from '../../img/hero_bg.jpg';

const Article = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const result = await axios(
        `http://public-api.wordpress.com/rest/v1/sites/tomkrablog.wordpress.com/posts/${id}`
      );

      setPost(result.data);
    };

    fetchPost();
  }, [id]);

  if (!post) return null;

  const date = new Date(post.date).toLocaleDateString('de-DE');

  return (
    <div>
      <div className="singlepage__contentContainer">
        <div
          className="singlepage__headerImage"
          style={{
            backgroundImage: `linear-gradient(rgba(96, 92, 78, 0.5), rgba(96, 92, 78, 0.5)), url(${
              post.featured_image || herobg
            })`,
          }}
        >
          <h1 className="singlepage__headerTitle">{post.title}</h1>
        </div>
        <div className="singlepage__content">
          <div className="article-full">
            <p>{date}</p>
            <p>by {post.author.name}</p>

            <img src={post.author.avatar_URL} alt="Author's avatar" />
            <h1 className="text-center">{post.title}</h1>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
            <div className="tags">
              {Object.values(post.tags).map((tag, index) => (
                <Link key={index} to={`/blog/tags/${tag.slug}`} className="tag">
                  {tag.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
