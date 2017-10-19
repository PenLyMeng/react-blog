/**
 * Created by l.pen on 10/18/2017.
 */


import React, {Component} from 'react'

import {Field, reduxForm} from 'redux-form'
import {Link} from 'react-router-dom'
import {createPost} from '../actions'
import {connect} from 'react-redux'

class PostNew extends Component {

    renderField(field) {

        const {meta} = field
        const className = `form-group ${meta.touched && meta.error ? 'has-danger' : ''}`



        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    type="text"
                    className="form-control"
                    {...field.input}
                />
               <div className="text-help">
                   {meta.touched?meta.error:""}
               </div>
            </div>
        )
    }

    onSubmit(values){
        this.props.createPost(values,()=>{
            this.props.history.push('/')
        })
    }

    render() {

        const {handleSubmit} = this.props
        const styleButtons = {
         margin:'5px'
        }

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />

                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />

                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />

                <button style={styleButtons} type="submit" className="btn btn-primary">Submit</button>
                <Link  style={styleButtons} to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}


function validate(values) {

    const errors = {}

    if (!values.title) {
        errors.title = "Please enter some title"
    }
    if (!values.categories) {
        errors.categories = "Please enter some tags"
    }
    if (!values.content) {
        errors.content = "Please enter some content"
    }
    return errors
}

export default reduxForm({
    form: 'PostsNewForm',
  /*  field:['title','categories','content'],*/
    validate
})(connect(null,{createPost})(PostNew))
