import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import {
    get_todolist,
    put_todolist,
} from '../actions'


const mapStateToProps = (state) => {
    const { data, isFetching, errmsg } = state.todoList
    return {
        data, isFetching, errmsg
    }
}

const mapDispatchToProps = {
    get_todolist,
    put_todolist,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)