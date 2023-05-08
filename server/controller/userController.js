const User = require("../Model/userModel/userModel");

const getAllUsers = async (req, res) => {

    try {
        const user = await User.find();
        res.send(user);
    } catch (error) {
        console.log(error);
    }

}

// get user by id
const getUserById = async (req, res) => {
    try {

        const { uid } = req.params

        const user = await User.findOne({ uid: uid });
        console.log(user);
        res.status(200).json(user);

    } catch (error) {
        console.log(error);
    }
}

// create user
const createUser = async (req, res) => {
    console.log(req.body);
    try {

        const { name,
            email,
            role,
            uid, photoURL } = req.body

        const user = new User({
            name,
            email,
            role, uid, photoURL
        })
        await user.save()
        res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
    }
}
// update role
const updateUserRole = async (req, res) => {
    try {
        const { uid } = req.params
        const { role } = req.body
        console.log(role);
        const user = await User.findOneAndUpdate({ uid: uid }, { role: role }, { new: true });

        res.status(200).json(user);

    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getAllUsers,
    getUserById,
    createUser, updateUserRole

}