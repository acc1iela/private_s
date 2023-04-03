import { useState, useReducer } from 'react';

const Example = () => {
  const [state, setState] = useState(0);
  const [rstate, dispatch] = useReducer((prev) => ++prev, 0);

  const countUp = () => {
    setState((prev) => ++prev);
  };

  const rcoutUp = () => {
    dispatch();
  };

  return (
    <>
      <div>
        <h3>{state}</h3>
        <button onClick={countUp}>CountUp</button>
      </div>
      <div>
        <h3>{rstate}</h3>
        <button onClick={rcoutUp}>CountUp</button>
      </div>
    </>
  );
};
