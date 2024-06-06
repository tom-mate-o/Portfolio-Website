import React from 'react';
import { Link } from 'react-router-dom';

const ArticlePreview = ({ post }) => {
  if (!post) return null;

  const excerpt =
    post.excerpt && post.excerpt
      ? post.excerpt.split(' ').slice(0, 20).join(' ') + '...'
      : '';

  const date = new Date(post.date).toLocaleDateString('de-DE');

  return (
    <div className="article">
      <a href={'/blog/' + post.ID} className="blackLink">
        {post.featured_image ? (
          <img
            className="img-responsive webpic"
            alt="article header"
            src={post.featured_image}
          />
        ) : (
          ''
        )}
        <p>{date}</p>
        <h1 className="text-center">{post.title}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        ></div>
      </a>
      <Link to={'/blog/' + post.ID}>
        <button className="btn">Read More</button>
      </Link>
    </div>
  );
};

export default ArticlePreview;
