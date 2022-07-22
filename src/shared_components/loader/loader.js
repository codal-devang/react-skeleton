import React from 'react';
import {Circles} from 'react-loader-spinner';

function LoaderMain() {
  return (
    <div> 
    <Circles className="component-loader" type="Circles" color="#5160CC" height={40} width={40} />
    </div>
  );
}

export default LoaderMain;
