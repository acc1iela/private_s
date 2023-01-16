import { useRef, forwardRef } from 'react';

const Input = ({ customRef }) => {
  return <input type="text" ref={customRef} />;
};

const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input ref={customRef} />
      <button onClick={() => ref.current.focus()}>インプット要素をフォーカスする</button>
    </>
  );
};

export default Example;
