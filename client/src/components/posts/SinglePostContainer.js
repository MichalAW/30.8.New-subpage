import { connect } from 'react-redux';
import { getPosts, getRequest, loadSinglePostRequest } from '../../redux/postsRedux';
import SinglePost from './SinglePost';

const mapStateToProps = state => ({
    posts: getPosts(state),
    request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
    loadSinglePostRequest: () => dispatch(loadSinglePostRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);