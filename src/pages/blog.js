import React, { Component } from 'react';
import axios from 'axios';
import ArticlePreview from '../app/components/articlePreview';
import herobg from '../img/hero_bg.jpg';

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        'http://public-api.wordpress.com/rest/v1/sites/tomkrablog.wordpress.com/posts'
      )
      .then((res) => {
        this.setState({ posts: res.data.posts });
        console.log(this.state.posts);
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <div className="singlepage__contentContainer">
          <div
            className="singlepage__headerImage"
            style={{
              backgroundImage: `linear-gradient(rgba(96, 92, 78, 0.5), rgba(96, 92, 78, 0.5)), url(${herobg})`,
            }}
          >
            <h1 className="singlepage__headerTitle">Blog</h1>
          </div>
          <div className="singlepage__content">
            <div className="blog">
              <h1 className="sectionTitle">Articles</h1>
              {this.state.posts
                ? this.state.posts.map((post) => <ArticlePreview post={post} />)
                : 'Loading...'}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//
