import { useState } from 'react';

const Child = ({ state, setState }) => {
  //props.state = { value: 1 }; errorになる、propsの値は基本的に変更ができないようになっていs
  return (
    <>
      <span>{state.value}</span>
    </>
  );
};

const increment = () => {
  setState((prev) => ({ value: prev.value + 1 }));
};

const Example = () => {
  const [state, setState] = useState({ value: 0 });

  return (
    <>
      <div>
        <Child state={state} setState={setState} />
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default Example;
