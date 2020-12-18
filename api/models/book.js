const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    bookName:{
      type: String,
      require: true
    },
    bookAuthor:{
      type: String,
      require: true
    },
    bookReleaseDate:{
      type: Date,
      require:true
    }
  },
  {
    timestamps: true
  }
  );

module.exports = mongoose.model('book', bookSchema);