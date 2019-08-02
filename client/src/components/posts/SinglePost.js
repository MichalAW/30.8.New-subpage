import React, { Component } from 'react'

export default class SinglePost extends Component {
    componentDidMount() {
        this.props.loadSinglePostRequest(123);
    }
    render() {
        return (
            <div>
                <h1>SinglePost</h1>
            </div>
        )
    }
}
