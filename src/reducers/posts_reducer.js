/**
 * Created by l.pen on 10/18/2017.
 */

import _ from 'lodash'
import {FETCH_POSTS,CREATE_POST,FETCH_POST} from '../actions'


export default function (state = {} ,action) {
    switch (action.type){
        case FETCH_POSTS:
           return _.mapKeys(action.payload.data,'id')

        case FETCH_POST:
            const post = action.payload.data
            const newState = {...state}
            newState[post.id] = post

            return newState


        /* case CREATE_POSTS:
             return _.mapKeys(action.payload.data,'id')
 */
        default:
            return state
    }
}