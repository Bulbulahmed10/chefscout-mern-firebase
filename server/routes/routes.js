const { createUser, getAllUsers,getUserById, updateUserRole } = require('../controller/userController');

const routes = require('express').Router();


routes.route("/user").get(getAllUsers).post(createUser);
routes.route("/user/:uid").get(getUserById).put(updateUserRole);



module.exports = routes;