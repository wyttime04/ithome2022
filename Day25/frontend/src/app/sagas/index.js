import { fork, takeLatest } from 'redux-saga/effects'
import * as actions from '../actions'

import { commonWorker } from './Worker'

import * as todoList from './todoList'

export default function* () {
    yield takeLatest(actions.GET_TODOLIST, (action) => commonWorker(action, todoList.get_todolist))
    yield takeLatest(actions.PUT_TODOLIST, todoList.PutTodoList)
}

