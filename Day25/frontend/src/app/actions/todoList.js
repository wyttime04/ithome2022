import action from '../lib/createAction'

export const GET_TODOLIST = 'GET_TODOLIST'
export const get_todolist = data => action(GET_TODOLIST, data)

export const GET_TODOLIST_SUCC = 'GET_TODOLIST_SUCC'
export const get_todolist_succ = data => action(GET_TODOLIST_SUCC, data)

export const GET_TODOLIST_FAIL = 'GET_TODOLIST_FAIL'
export const get_todolist_fail = data => action(GET_TODOLIST_FAIL, data)


export const PUT_TODOLIST = 'PUT_TODOLIST'
export const put_todolist = data => action(PUT_TODOLIST, data)

export const PUT_TODOLIST_SUCC = 'PUT_TODOLIST_SUCC'
export const put_todolist_succ = data => action(PUT_TODOLIST_SUCC, data)

export const PUT_TODOLIST_FAIL = 'PUT_TODOLIST_FAIL'
export const put_todolist_fail = data => action(PUT_TODOLIST_FAIL, data)
