import { useState } from 'react';

const Example = () => {
  const [time, setTime] = useState(0);
  return (
    <>
      <h3>
        <time>{time}</time>
        <span>秒経過</span>
      </h3>
    </>
  );
};

export default Example;
