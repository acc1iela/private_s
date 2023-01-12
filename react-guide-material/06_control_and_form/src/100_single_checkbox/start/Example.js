import { useState } from 'react';

const Example = () => {
  const [isChecked, setIsChecked] = useState(true);

  const toggleChecked = (e) => {
    setIsChecked((prevState) => {
      let state = !prevState;
      return state;
    });
  };

  return (
    <div>
      <label htmlFor="mycheck">チェック：</label>
      <input type="checkbox" id="my-check" checked={isChecked} onChange={(e) => toggleChecked(e)} />
      <div>{isChecked ? 'ON!' : 'OFF'}</div>
    </div>
  );
};
