const users = require('./users');

const getAllUsers = (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
            message: 'Successfully get all users',
            data: users
        });
    }
    catch (error) {
        console.log(error.message);
    }
};

const getUserById = (req, res) => {
    try {
        const {id} = req.params;

        const user = users.find((user) => user.id === id);

        if (!user) {
            res.status(400).json({
                status: 'error',
                message: `User with id ${id} not found`
            });
        }
        else {
            res.status(200).json({
                status: 'success',
                message: 'Successfully get user',
                data: users
            });
        }
    }
    catch (error) {
        console.log(error.message);
    }
};

const addUser = (req, res) => {
    try {
        const {name, division} = req.body;
        const sizeUser = users.length;

        const newUser = {
            id: sizeUser,
            name: name,
            division: division
        };

        users.push(newUser);

        res.status(201).json({
            status: 'success',
            message: 'Successfully add new user',
            data: users
        });

    }
    catch (error) {
        console.log(error.message);
    }
};

const deleteUser = (req, res) => {
    try {
        const {id} = req.params;

        const index = users.findIndex((user) => user.id === id);

        if (index === -1) {
            res.status(400).json({
                status: 'error',
                message: `User with id ${id} not found`
            });
        }
        else {
            users.splice(index, 1);

            res.status(200).json({
                status: 'success',
                message: 'Successfully delete user',
                data: users
            });
        }
    }
    catch (error) {
        console.log(error.message);
    }
};

const updateUser = (req, res) => {
    try {
        const {id, name, division} = req.body;

        const index = users.findIndex((user) => user.id === id);

        if (index === -1) {
            res.status(400).json({
                status: 'error',
                message: `User with id ${id} not found`
            });
        }
        else {
            users[index] = {
                id: index,
                name: name,
                division: division
            }

            res.status(200).json({
                status: 'success',
                message: 'Successfully update user'
            });
        }
    }
    catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    deleteUser,
    updateUser
};