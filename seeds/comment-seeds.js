const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: "woah"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "hjshkjgk"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "heyy"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;