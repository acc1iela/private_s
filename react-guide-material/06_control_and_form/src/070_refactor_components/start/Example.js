import { useState } from 'react';

const Example = () => {
  const animals = ['Dog', 'Cat', 'Rat'];

  const [filterVal, setFilterVal] = useState('');

  return (
    <>
      <input type="text" value={filterVal} onChange={(e) => setFilterVal(e.target.value)} />
    </>
  );
};

export default Example;
