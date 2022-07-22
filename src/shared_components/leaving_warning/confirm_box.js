import React from 'react';
// import { Window } from '@progress/kendo-react-dialogs';

const ConfirmBox = ({ visible, onCancel, onConfirm, title }) => {
  const confirm = () => {
    onCancel();
    onConfirm();
  };

  window.onbeforeunload = e => {
    e = e || window.event;

    if (visible) {
      // For IE and Firefox prior to version 4
      if (e) {
        e.returnValue = `Are you sure you want to leave ${title}? Any changes made won’t be saved and will need to be re-entered.`;
      }

      // For Safari
      return `Are you sure you want to leave ${title}? Any changes made won’t be saved and will need to be re-entered.`;
    }
    return false;
  };

  return (
    <React.Fragment>
      set up common confirmation box code here we set basic code we use in previous project for refrence
      {/* {visible && (
        <div className="modal-root">
          <div className="backdrop" />
          <div className="modal-wrapper">
            <Window
              onClose={() => {
                onCancel();
              }}
              title={
                <h3
                  id="leave-page-header"
                  className="d-flex justify-content-start align-items-center"
                >
                  <i className="fas fa-exclamation  mr-15 warning-mark" />
                  Leave ‘{title}’?
                </h3>
              }
              initialWidth={500}
              initialHeight={350}
              minimizeButton="false"
              maximizeButton="false"
            >
              <div className="window-container" id="leave-page-title">
                <p className="brand-color mb-0">
                  Are you sure you want to leave ‘{title}’? Any changes made won’t be saved and will
                  need to be re-entered.
                </p>
              </div>
              <div className="window-footer d-flex justify-content-end align-items-center">
                <button
                  id="not-leave-btn"
                  type="button"
                  className="btn bg-btn btn-bdr mr-15"
                  onClick={() => {
                    onCancel();
                  }}
                >
                  No, Don&apos;t Leave
                </button>
                <button
                  id="leave-btn"
                  type="button"
                  className="btn bg-btn"
                  onClick={() => {
                    confirm();
                  }}
                >
                  Yes, Leave
                </button>
              </div>
            </Window>
          </div>
        </div>
      )} */}
    </React.Fragment>
  );
};

export default ConfirmBox;
