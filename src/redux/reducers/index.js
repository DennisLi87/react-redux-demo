import { combineReducers } from 'redux'
import todos from './todo/todo'
import visibilityFilter from './todo/visibilityFilter'

const todoApp = combineReducers({
                                    todos,
                                    visibilityFilter
                                });

export default todoApp