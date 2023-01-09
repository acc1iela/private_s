import { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountResult title="カウント" count={count}></CountResult>
      <CountUpdate setCount={setCount}></CountUpdate>
    </>
  );
};

const CountResult = ({ title, count }) => (
  <h3>
    {title}: {count}
  </h3>
);

const CountUpdate = ({ setCount }) => {
  const countUp = () => {
    setCount((prev) => prev + 1);
  };
  const countDown = () => {
    setCount((prev) => prev - 1);
  };
};
