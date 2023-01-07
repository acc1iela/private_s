import { useState } from 'react';

const Example = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(10);
  const [countC, setCountC] = useState(100);
  return (
    <>
      <p>ボタンAを{}回押しました！</p>
      <button
        onClick={() => {
          setCountA(countA + 1);
        }}
      >
        countAボタン
      </button>
      <button
        onClick={() => {
          setCountB(countB + 1);
        }}
      >
        countBボタン
      </button>
      <button
        onClick={() => {
          setCountC(countC + 1);
        }}
      >
        countCボタン
      </button>
    </>
  );
};

export default Example;
