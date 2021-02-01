import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const authorName = 'Accio';
    return (
      <div>
        <Article title={'hoge'} order={3} isPublished={true} author={authorName} />
      </div>
    );
  }
}

export default Blog;
