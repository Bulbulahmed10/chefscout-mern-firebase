const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin', 'super-admin'],
    },
    uid: {
        type: String,
    
    },
    photoURL: {
        type: String,
    },
}, {
    timestamps: true,
});
const User = mongoose.model('user', userSchema);
module.exports = User;
