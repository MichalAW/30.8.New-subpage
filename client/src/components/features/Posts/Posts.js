import React from 'react';
import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import PostsList from '../PostsList/PostsList';

class Posts extends React.Component {

    componentDidMount() {
        const { loadPosts } = this.props;
        loadPosts();
    }

    render() {
        const { posts, request } = this.props;

        return (
            <div>
                {request.pending && <Spinner/>}
                <PostsList posts={posts} />
            </div>
        );
    }

};

Posts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ),
    loadPosts: PropTypes.func.isRequired,
};

export function posts(statePart = initialState, action = {}) {
    switch (action.type) {
        case PostsList:
            return  { ...statePart, request: { pending: false, success: true, posts.length > 0 } };
        case Spinner:
            return { ...statePart, request: { pending: true, success: null } };
        case AlertError:
            return { ...statePart, request: { pending: false, error: null } };
        case AlertInfo:
            return { ...statePart, request: { pending: false, success: true, posts.length === 0 } };
        default:
            return statePart;
    }
};

export default Posts;