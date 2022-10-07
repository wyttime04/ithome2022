export * from './ui'
export * from './todoList'

export const INIT_DATA = 'INIT_DATA'
export const init_data = data => action(INIT_DATA, data)