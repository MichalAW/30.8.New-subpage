import React from 'react';
import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import PostsList from '../PostsList/PostsList';
import Pagination from '../../common/Pagination/Pagination';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.initialPage = this.props.initialPage || 1;
        this.postsPerPage = this.props.postsPerPage || 10;
        this.pagination = this.props.pagination === undefined ? true: this.props.pagination;
    }

    componentDidMount() {
        const { loadPostsByPage } = this.props;
        loadPostsByPage(this.props.initialPage, this.postsPerPage);
    }

    loadPostsPage = (page) => {
        const { loadPostsByPage } = this.props;
        loadPostsByPage(page, this.postsPerPage);
    }


    render() {
        const { posts, request, pages } = this.props;
        const { loadPostsPage } = this;

        return (
            <div>
                {request.pending && <Spinner/>}
                <PostsList posts={posts} />
                {this.pagination &&
                    <Pagination pages={pages} onPageChange={loadPostsPage}/>
                }
            </div>
        );
    }
};

Posts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ),
    loadPosts: PropTypes.func.isRequired,
};

export default Posts;
