const Post = require('../models/post.model');
const uuid = require('uuid');

// add new post
const addPost = async function (req, res) {

    try {
        const { title, author, content } = req.body;
        const sanitizeBody = (req.body.sanitize())
        let newPost = new Post(req.body);
        newPost.id = uuid();

        postSaved = await newPost.save();
        res.status(200).json(postSaved);

    } catch(err) {
        res.status(500).json(err);
    }
}

const getPosts = async (req, res) => {

    try {
        res.status(200).json(await Post.find());
    } catch(err) {
        res.status(500).json(err);
    }
};

const getPostById = async (req, res) => {
    try {
        res.status(200).json(await Post.findOne({id:req.params.id}));
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {getPosts, getPostById, addPost};
