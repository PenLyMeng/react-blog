/**
 * Created by l.pen on 10/18/2017.
 */


import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'


class PostNew extends Component {

    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    type="text"
                />
            </div>
        )
    }

    render() {
        return (
            <form>

                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />

                <Field
                    label="Tag"
                    name="tags"
                    component={this.renderField}
                />

                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />


            </form>
        )
    }
}


function validate(values) {
    
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostNew)
