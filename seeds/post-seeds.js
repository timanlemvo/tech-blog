const { Post } = require('../models');

const postData = [
    {
        title: "Test",
        post_content: "askjfdkjfkjdsnkjnjdf",
        user_id: 3
    },
    {
        title: "hello world",
        post_content: "HEYYYYYYY",
        user_id: 1
    },
    {
        title: "Tech Rocks",
        post_content: "Meh",
        user_id: 2

    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;