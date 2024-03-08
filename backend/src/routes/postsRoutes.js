const express = require('express');
const router = express.Router();
const Posts = require('../models/postsSchema');

// Publicar Post // Envíar mensaje
router.post('/', async(req, res) => {
    try {
        let post = req.body;
        const newPost = await Posts.create(post);
        console.log(newPost)
        await newPost.save();
        res.status(201).send({message: "Post created", data: newPost});
    } catch (error) {
        res.status(400).send({message: error});
    }
})

module.exports = router;