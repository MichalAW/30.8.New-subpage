import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import PostsCounter from '../../features/PostsCounter/PostsCounter';
import Posts from '../../features/Posts/PostsContainer';

const PostsPage = () => (
    <div>
        <PageTitle>Posts list</PageTitle>
        <PostsCounter/>
        <Posts postsPerPage={3} pagination={false}/>
    </div>
);

export default PostsPage;