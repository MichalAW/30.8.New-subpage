const Post = require('../models/post.model');
// get all posts
// get all posts
const getPosts = async (req, res) => {

    try {
        res.status(200).json(await Post.find());
    } catch(err) {
        res.status(500).json(err);
    }

};

export default getPosts;
