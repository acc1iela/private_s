const Example = () => {
  const clickHandler = () => {
    alert('ボタンがクリックされました');
  };
  const hello = () => 'hello';
  return (
    <>
      <button onClick={clickHandler}>クリックしてね</button>
      <button>クリック</button>
      {hello()}
    </>
  );
};

export default Example;
