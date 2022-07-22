import { NOTIFICATIONTYPE } from './notificationTypes'

export const notificationType = data => ({
    type: NOTIFICATIONTYPE,
    payload: data,
  });
  