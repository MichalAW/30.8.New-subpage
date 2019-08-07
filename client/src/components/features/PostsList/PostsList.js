import React from 'react';
import { PropTypes } from 'prop-types';
import PostSummary from '../PostSummary/PostSummary';

const PostsList = ({ posts }) => {
    console.log()
    return (
    <div>
        <section className="posts-list">
            {posts.map(post => <PostSummary key={post.id} {...post} />)}
        </section>
    </div>
)};

PostsList.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ),
};

export default PostsList;