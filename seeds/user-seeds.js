const { User } = require('../models');

const userData = [
    {
        username: "Esteban311",
        email: "311@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "YoYo",
        email: "yoyo@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "iSeeYou",
        email: "test@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "Woah",
        email: "woah@gmail.com",
        password: "p@ssword4"
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;