const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    url: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
    },
    byline: {
        type: String,
    },
    excerpt: {
        type: String,
    },
    note: [{
        type: Schema.Types.ObjectId,
        ref: 'Note'
    }]
})

const Article = mongoose.model('Article', ArticleSchema)

module.exports = Article