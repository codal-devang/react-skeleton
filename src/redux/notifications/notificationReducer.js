import { NOTIFICATIONTYPE } from './notificationTypes'

const NotificationType = {
    payload: {
      show: false,
    },
  };
  
  const NotificationReducer = (state = NotificationType, action) => {
    switch (action.type) {
      case NOTIFICATIONTYPE:
        delete action.type;
        return {
          ...action,
        };
      default:
        return state;
    }
  };
  export default NotificationReducer;
  