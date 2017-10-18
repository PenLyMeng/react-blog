/**
 * Created by l.pen on 10/18/2017.
 */

import {combineReducers} from 'redux'
import PostReducers from './posts_reducer'
import {reducer as formReducer} from 'redux-form'

const indexReducers = combineReducers({
    posts:PostReducers,
    form:formReducer
})


export default indexReducers