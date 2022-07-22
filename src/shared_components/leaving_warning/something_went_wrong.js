import React from 'react';
// import { Window } from '@progress/kendo-react-dialogs';
import { withRouter } from 'react-router-dom';

function SomeThingWrong(props) {
  const toggleDialog = () => {
    props.onClose(false);
  };

  return (
    <div className="modal-root">
      <div className="backdrop" />
      <div className="modal-wrapper" id="div-something-went-wrong">
      Sorry, it Looks Like Something Went Wrong
        {/* <Window
          onClose={toggleDialog}
          title={
            <h3 className="d-flex justify-content-start align-items-center">
              Sorry, it Looks Like Something Went Wrong
            </h3>
          }
          initialWidth={500}
          initialHeight={350}
          minimizeButton="false"
          maximizeButton="false"
        >
          <div className="window-container">
            <p className="brand-color ">
              We apologize for the inconvenience but it looks like something went wrong. Please try
              again.
            </p>
          </div>
        </Window> */}
      </div>
    </div>
  );
}
export default withRouter(SomeThingWrong);
