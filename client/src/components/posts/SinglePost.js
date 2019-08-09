import React, { Component } from 'react';
import HtmlBox from '../common/HtmlBox/HtmlBox';
import { withRouter } from 'react-router-dom';
import { FacebookProvider, Comments, ShareButton } from 'react-facebook';
import { BASE_URL } from '../../config';

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
                <FacebookProvider appId="511090986363092">
                    <Comments href={`BASE_URL}`}/>
                        <ShareButton href={`BASE_URL}`}>
                            Share
                        </ShareButton>
                </FacebookProvider>
            </div>
        )
    }
}

// export default withRouter(props => <NazwaKomponentu {...props}/>);