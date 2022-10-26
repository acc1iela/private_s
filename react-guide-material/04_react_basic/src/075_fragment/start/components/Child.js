import './Child.css';
import React from 'react';
//  import { Fragment } from 'react';

const Child = () => {
  return (
    <React.Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Component</h3>
      <p>テスト</p>
    </React.Fragment>
  );
};

export default Child;
