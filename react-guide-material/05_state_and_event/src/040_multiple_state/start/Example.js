import { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState();
  return (
    <>
      <p>このボタンは{count}回クリックされました</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      />
      test
    </>
  );
};

export default Example;
