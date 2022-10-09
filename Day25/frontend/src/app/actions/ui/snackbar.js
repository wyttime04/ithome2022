import action from '../../lib/createAction'

export const ENQUEUE_SNACKBAR = 'ENQUEUE_SNACKBAR'
/**
 * 新增訊息到通知佇列
 * @param {string} message 內容
 * @param {*} options 訊息設定
 * @param {number} key key
 * ---
 * @param {string} options.variant 類型
 * @param {function} options.action button
 */
export const enqueue_snackbar = data => action(ENQUEUE_SNACKBAR, data)

export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR'
/**
 * 關閉通知佇列訊息
 * @param {number} key key
 */
export const close_snackbar = data => action(CLOSE_SNACKBAR, data)

export const REMOVE_SNACKBAR = 'REMOVE_SNACKBAR'
/**
 * 移除通知佇列訊息
 * @param {number} key key
 */
export const remove_snackbar = data => action(REMOVE_SNACKBAR, data)
