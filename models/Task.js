const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "must add name"],
        trim:true,
        maxlength: [20, "must be less than 20 characters"]
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Tasks', taskSchema)