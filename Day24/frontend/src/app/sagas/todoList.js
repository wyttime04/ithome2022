import { take, call, put, select } from 'redux-saga/effects'
import * as actions from '../actions'
import api from '../lib/api'

export function get_todolist({ type, ...data }) {
    return api({
        cmd: `todolist`,
        method: 'GET',
        data
    })
}


export function put_todolist({ type, ...data }) {
    return api({
        cmd: `todolist`,
        method: 'PUT',
        data
    })
}

export function* PutTodoList(action) {
    const actionType = action.type.toLowerCase()
    const res = yield call(put_todolist, action)
    const succ = actions[`${actionType}_succ`]
    const fail = actions[`${actionType}_fail`]
    console.log(res)
    if (res.ok) {
        yield put(succ(res.body))
        yield put(actions.enqueue_snackbar({
            message: '更新 TodoList 成功',
            key: new Date().getTime(),
            options: {
                variant: 'success'
            }

        }))
    }
    else {
        yield put(fail(res.body))
        yield put(actions.enqueue_snackbar({
            message: '更新 TodoList 失敗',
            key: new Date().getTime(),
            options: {
                variant: 'error'
            }
        }))
    }
}
