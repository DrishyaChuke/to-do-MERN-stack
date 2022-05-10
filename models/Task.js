const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'most provide name'],
        trim: true, // i.e. we don't have any white spaces , "   keshab   ", "keshab"
        maxLength: [20, 'name cannot be more than 20 characters']
    },
    completed:{
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model('Task', TaskSchema)