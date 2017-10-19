/**
 * Created by l.pen on 10/19/2017.
 */

import React,{Component} from 'react'
import {connect} from 'react-redux'
import {fetchPost} from '../actions'

class PostsShow extends Component{

    render(){
        return (
        <div>
            <h3>{this.props.title}</h3>
            <div>{this.props.categories}</div>
            <div>{this.props.content}</div>
        </div>
        )
    }
}


/*function mapStateToProps(state) {
    return {}
}*/

export default connect(null,{fetchPost})(PostsShow)

