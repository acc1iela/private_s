import React from 'react';

const Article = (props) => {
  let publishState = '';
  if (props.isPublished) {
    publishState = '公開';
  } else {
    publishState = '非公開';
  }
  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlFor="check">公開状態：</label>
      <input type="checkbox" cheked={props.isPublished} id="check" onClick={() => props.toggle()} />
    </div>
  );
};

export default Article;
