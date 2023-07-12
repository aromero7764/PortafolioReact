import React, { useState } from 'react';

const TogleDarkMode = () => {
  const [toggle, setCToggle] = useState(false)



  const changeToogle = () => {
    setCToggle(!toggle)
    if (toggle) {
      document.body.classList.remove('light-mode')
    } else {
      document.body.classList.add('light-mode')
    }
  }



  return (
    <article onClick={() => changeToogle()} className="darklight">
            <h2 id="toggle-label" className="darlike__label">{(toggle) ? 'Light' : 'Dark'}</h2>
              <div id="toggle" className="toggle">
                <div id="toggle-circle" className={`toggle_circle ${(toggle) && 'toggle_circle-right'}`}></div>
              </div>
          </article> 
  );
};

export default TogleDarkMode;