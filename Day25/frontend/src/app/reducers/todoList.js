import * as actions from '../actions'

const init = {
    data: [],
    isFetching: false,
    errmsg: '',
}

export default function (
    state = init, action) {
    const ACTION = "TODOLIST"
    switch (action.type) {
        // INIT_DATA
        case actions[`INIT_DATA`]:
            return init

        // GET
        case actions[`GET_${ACTION}`]:
            return {
                ...state,
                errmsg: '',
                isFetching: true,
            }
        case actions[`GET_${ACTION}_SUCC`]:
            return {
                ...state,
                data: action.data,
                isFetching: false,
            }
        case actions[`GET_${ACTION}_FAIL`]:
            return {
                ...state,
                errmsg: action.errmsg,
                data: action.data || init.data,
                isFetching: false,
            }

        // PUT
        case actions[`PUT_${ACTION}`]:
            return {
                ...state,
                errmsg: '',
                isFetching: true,
            }
        case actions[`PUT_${ACTION}_SUCC`]:
            return {
                ...state,
                isFetching: false,
            }
        case actions[`PUT_${ACTION}_FAIL`]:
            return {
                ...state,
                errmsg: action.errmsg,
                isFetching: false,
            }

        default:
            return state
    }
}