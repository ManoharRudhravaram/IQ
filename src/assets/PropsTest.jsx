import React, { useState } from 'react';
import ColorComp from './ColorComp';

function PropsTest() {
  const [uiColor, setUiColor] = useState('');

  function colorHandler(e) {
    setUiColor(e.target.value);
  }

  return (
    <div className="m-auto flex flex-col items-center justify-center gap-10">
      <div className={`h-72 w-72 mt-10 border border-black `} style={{backgroundColor:uiColor}}></div>
      <ColorComp colorHandler={colorHandler} />
    </div>
  );
}

export default PropsTest;
