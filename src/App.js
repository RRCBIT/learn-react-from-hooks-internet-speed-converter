import './App.css';

import React, { useState } from 'react';

import CardFooter from './components/CardFooter';
import UnitControl from './components/UnitControl';
import UnitConverter from './components/UnitConverter';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab, fas, far);

function App() {
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <UnitControl />
        <UnitConverter
          inputValue={inputValue}
          handleInputChange={handleInputChange}
        />
        <div className="converter">

          <div className="flex-1">
            <div className="converter-title">Set</div>
            {/* Origin Start STEP 4: 把事件處理器綁定進去，並且把 value 帶入 */}
            <input
              type="number"
              onChange={handleInputChange}
              value={inputValue}
              className="input-number"
              min="0"
            />
          </div>
          <span className="angle-icon fa-2x" style={{ marginTop: 30 }}>
            <i className="fas fa-angle-right"></i>
          </span>

          <div className="text-right flex-1">
            <div className="converter-title">Show</div>
            {/* STEP 5: 把使用者輸入的值顯示於畫面上 */}
            <input
              type="text"
              className="input-number text-right"
              disabled
              value={inputValue / 8}
            />
          </div>{/*righg*/}
        </div>  {/* STEP 5: converter end */}
       
      </div>
      <CardFooter inputValue={inputValue} />
    </div>
  );
}

export default App;
