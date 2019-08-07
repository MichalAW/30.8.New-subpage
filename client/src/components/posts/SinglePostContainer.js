import { connect } from 'react-redux';
import {  getSinglePost, getRequest, loadSinglePostRequest } from '../../redux/postsRedux';
import SinglePost from './SinglePost';

const mapStateToProps = state => ({
    getSinglePost: getSinglePost(state),
    request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
    loadSinglePostRequest: (signlePostId) => dispatch(loadSinglePostRequest(signlePostId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);