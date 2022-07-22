import React from 'react';
import Loader from 'react-loader-spinner';

const TabLoader = props => {
  return (
    <div className="inner-tab">
      <Loader
        type="Circles"
        className={props.className}
        color="#5160CC"
        height={40}
        width={40}
      ></Loader>
    </div>
  );
};

export default TabLoader;
