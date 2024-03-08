const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
    from: {
        type: String,
        //required: true,
    },
    post: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

const Posts = mongoose.model('posts', postsSchema);

module.exports = Posts
