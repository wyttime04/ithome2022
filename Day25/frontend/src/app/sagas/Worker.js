import { take, call, put, select } from 'redux-saga/effects'
import * as actions from '../actions'

/* 
    take:  等待一個 action 傳入
    call:  呼叫一個 function
    put :  呼叫一個 action
    select 從 store 取出資料

*/

export function* commonWorker(action, api, msg) {
    const actionType = action.type.toLowerCase()
    const res = yield call(api, action)
    const succ = actions[`${actionType}_succ`]
    const fail = actions[`${actionType}_fail`]
    if (res.ok) {
        yield put(succ(res.body))
        if (msg) {
            yield put(actions.enqueue_snackbar({
                message: msg + '成功',
                key: new Date().getTime(),
                options: {
                    variant: 'success'
                }
            }))
        }
    }
    else {
        yield put(fail(res.body))
        if (msg) {
            yield put(actions.enqueue_snackbar({
                message: msg + '失敗',
                key: new Date().getTime(),
                options: {
                    variant: 'error'
                }
            }))
        }
    }
}