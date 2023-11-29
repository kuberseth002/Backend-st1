const mongoose = require('mongoose')

const fieldSchema = mongoose.Schema(
    {
        title: {
            type:String,
            required: [true, "please enter book name"]
        },
        author:{
            type:String,
            required:true,
        },

        publicationyear:{
            type:Number,
            required:true,
        },

        Isbn:{
            type:Number,
            required:true,
        }
    },
    {
        timestamp:true
    }
)

const book = mongoose.model('book',fieldSchema)

module.exports = book;