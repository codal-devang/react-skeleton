import React, { useEffect, useState } from 'react';
import { Prompt } from 'react-router-dom';
import ConfirmBox from './confirm_box';

/**
 * 
 * @param {*} param0 
 * @returns 
 * when I move different page from current page 
 */

export const RouteLeavingGuard = ({
  navigate,
  when,
  shouldBlockNavigation,
  yes,
  no,
  content,
  title,
}) => {
  const [modalVisible, updateModalVisible] = useState(false);
  const [lastLocation, updateLastLocation] = useState();
  const [confirmedNavigation, updateConfirmedNavigation] = useState(false);

  const showModal = location => {
    updateModalVisible(true);
    updateLastLocation(location);
  };

  const closeModal = cb => {
    updateModalVisible(false);
    if (cb) {
      cb();
    }
  };

  const handleBlockedNavigation = nextLocation => {
    if (!confirmedNavigation && shouldBlockNavigation(nextLocation)) {
      showModal(nextLocation);
      return false;
    }
    window.onbeforeunload = null;
    return true;
  };
  const handleConfirmNavigationClick = () => {
    closeModal(() => {
      if (lastLocation) {
        updateConfirmedNavigation(true);
      }
    });
  };

  useEffect(() => {
    if (confirmedNavigation) {
      navigate(lastLocation.pathname);
      updateConfirmedNavigation(false);
    }
  }, [confirmedNavigation, navigate, lastLocation]);

  return (
    <React.Fragment>
      <Prompt when={when} message={handleBlockedNavigation} />
      <ConfirmBox
        title={title}
        yes={yes}
        no={no}
        visible={modalVisible}
        onCancel={closeModal}
        onConfirm={handleConfirmNavigationClick}
        className="prompt_guide"
      >
        <p id="main-text" className="main_text">
          {content}
        </p>
      </ConfirmBox>
    </React.Fragment>
  );
};

export default RouteLeavingGuard;
