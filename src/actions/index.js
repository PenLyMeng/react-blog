/**
 * Created by l.pen on 10/18/2017.
 */

import axios from 'axios'
export const FETCH_POSTS = 'fetch_posts'

/*const ROOT_URL = 'http://reduxblog.herokuapp.com/api'*/
const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts'
const API_KEY = ''

export function fetchPosts() {
    // const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
    const request = axios.get(ROOT_URL)

    console.log(request)

    return {
        type: FETCH_POSTS,
        payload: request
    }
}