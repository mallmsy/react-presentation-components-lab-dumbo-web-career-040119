import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

  const sayHello = () => {
    console.log("HELLO I AM HAPPY")
  }

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={sayHello} />
  </div>,
  document.getElementById('root')
);
