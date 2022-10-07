import * as actions from '../../actions'

export default function (
    state = {
        notifications: [],
    }, action) {
    switch (action.type) {
        // SNACKBAR
        case actions[`ENQUEUE_SNACKBAR`]:
            return {
                ...state,
                notifications: [
                    ...state.notifications,
                    {
                        message: action.message,
                        key: action.key,
                        options: {
                            anchorOrigin: {
                                vertical: 'bottom',
                                horizontal: 'right',
                            },
                            ...action.options
                        }
                    }
                ]
            }
        case actions[`CLOSE_SNACKBAR`]:
            return {
                ...state,
                notifications: state.notifications.map(notification => (
                    (notification.key === action.key)
                        ? { ...notification, dismissed: true }
                        : { ...notification }
                )),
            }
        case actions[`REMOVE_SNACKBAR`]:
            return {
                ...state,
                notifications: state.notifications.filter(
                    notification => notification.key !== action.key,
                )
            }
        
        default:
            return state
    }
}
