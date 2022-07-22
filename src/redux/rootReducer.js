import { combineReducers } from 'redux'
import AuthReducer from './auth/authReducer'
import NotificationReducer from './notifications/notificationReducer'

const rootReducer = combineReducers({
    auth: AuthReducer,
    notification: NotificationReducer
})

export default rootReducer