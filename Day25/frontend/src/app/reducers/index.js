import {
    combineReducers
} from 'redux'

import ui from './ui'
import todoList from './todoList'

export default combineReducers({
    ui,
    todoList,
})