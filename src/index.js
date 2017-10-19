import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'

import App from './components/app';

import reducers from './reducers/index'
import PostsIndex from './components/posts_index'
import PostNew from './components/post_new'
import PostShow from './components/posts_show'


import {BrowserRouter,Route,Switch} from 'react-router-dom'
import promise from 'redux-promise'


const createStoreWithMiddleware = applyMiddleware(promise)(createStore)



ReactDOM.render(
   <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/posts/new" component={PostNew}/>
                    <Route path="/posts/:id" component={PostShow}/>
                    <Route path="/" component={PostsIndex}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));

