import { useState } from 'react';

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);
  console.log(nums);
  const shuffle = () => {
    const newNums = [...nums];
    const value = newNums.pop();
    newNums.unshift(value);
    setNums(newNums);
    console.log(nums === newNums); //異なる値
  };
  return (
    <>
      <h1>{nums}</h1>
      <button onClick={shuffle}></button>
    </>
  );
};

export default Example;
