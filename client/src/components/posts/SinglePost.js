import React, { Component } from 'react'
import HtmlBox from '../common/HtmlBox/HtmlBox';
export default class SinglePost extends Component {
    componentDidMount() {
        this.props.loadSinglePostRequest(this.props.match.params.id);
    }
    render() {
        return (
            <div>
                <h1>SinglePost</h1>
                <HtmlBox>
                    {
                        this.props.getSinglePost ? this.props.getSinglePost.title: null
                    }
                    {
                        this.props.getSinglePost ? this.props.getSinglePost.content: null
                    }
                </HtmlBox>
            </div>
        )
    }
}
