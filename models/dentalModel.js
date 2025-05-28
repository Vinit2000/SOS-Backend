// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        match: [/^[A-Za-z\s]+$/, 'Invalid characters in name']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        unique: true,
        match: [/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email format']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters']
    },
}, { versionKey: false});

const User=mongoose.model('User', userSchema,'dentalcompany');
module.exports = User;