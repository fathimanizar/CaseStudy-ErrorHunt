const mongoose = require('mongoose');
mongoose.connect((process.env.MONGODB_URI,{useNewUrlParser: true,useUnifiedTopology: true }) ||'mongodb://localhost:27017/Library');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title: String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdatas',BookSchema);

module.exports = bookdata;