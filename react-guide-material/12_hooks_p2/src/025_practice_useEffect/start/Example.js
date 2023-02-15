import { useState } from 'react';

const Example = () => {
  const [isDisp, setIsDisp] = useState(true);

  return (
    <>
      {isDisp && <Timer />}
      <button onClick={() => setIsDisp((prev) => !prev)}>トグル</button>
    </>
  );
};

const Timer = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      window.alert('checked!');
    }
  }, [checked]);

  return (
    <>
      <label>
        <input
          type={'checkbox'}
          value={checked}
          onClick={() => setChecked((checked) => !checked)}
        />
        click me
      </label>
    </>
  );
};

export default Example;
