import { useState } from 'react';

const Example = () => {
  const [state, setState] = useState(0);

  const countUp = () => {
    setState((prev) => {
      return (prev) => ++prev;
    });
  };

  return (
    <>
      <h3>{state}</h3>
      <button onClick={countUp}></button>
    </>
  );
};
