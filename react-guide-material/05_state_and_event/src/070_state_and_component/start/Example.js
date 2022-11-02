import { useState } from 'react';

const Example = () => {
  const [toggle, setToggle] = useState(true);
  const toggleComponent = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <button onClick={toggleComponent}>toggle</button>
      {toggle ? <Count key="A" title="A" /> : <Count key="B" title="B" />}
    </>
  );
  // Reactはツリー構造が変わらない限りはステートの値を保持し続ける
  // コンポーネントのReact要素ツリーにおける位置が変わらない場合はstateは保持される
};

const Count = ({ title }) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>
        {title}: {count}
      </h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
