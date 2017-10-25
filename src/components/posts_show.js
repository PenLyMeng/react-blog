/**
 * Created by l.pen on 10/19/2017.
 */

import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchPost,deletePost} from '../actions'


class PostsShow extends Component{

    componentDidMount(){
        const {id}  = this.props.match.params
        this.props.fetchPost(id)
    }


    onDeleteClick(){
      const {id} = this.props.match.params
        this.props.deletePost(id,()=>{
            this.props.history.push("/")
        })
    }

    render(){
      if(!this.props.post){
        return(<div>Loadiing...</div>)
      }

      const  styles = {backgroundColor:'red'}

        return (
            <div>
                <div>


                        <Link to="/" className="btn btn-default">Back</Link>
                     <button className="btn btn-danger float-xs-right" onClick={this.onDeleteClick.bind(this)}>Delete Post</button>


                </div>
                <h3>Post New</h3>
                <h3>{this.props.post.title}</h3>
                <div>{this.props.post.categories}</div>
                <div>{this.props.post.content}</div>
            </div>
        )
    }
}


 function mapStateToProps({posts},ownProps) {
    return {post:posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchPost,deletePost})(PostsShow)

