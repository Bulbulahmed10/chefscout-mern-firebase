const { createUser, getAllUsers,getUserById } = require('../controller/userController');

const routes = require('express').Router();


routes.route("/user").get(getAllUsers).post(createUser);
routes.route("/user/:uid").get(getUserById);



module.exports = routes;