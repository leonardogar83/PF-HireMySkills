const users  = require('../models/users.js')


const createUser = async (req, res, next) => {
    try {
        const { name, photo, town, email, contact } = req.body;
        console.log(req.body, 'BODY');
        // const userFind = await User.findAll({ where: { email: email } });
        // if(userFind.length > 0) res.send({ message: 'Cliente repit'});
        // else {
            await users.create({ name, photo, email, town, contact });
            console.log(users, 'USER');
        // };
        res.send({ message: 'User create'});
    } catch (error) {
        res.send(error);
    };
};

module.exports = { createUser };