const issueSchema = mongoose.Schema({
    issueName:{
      type: String,
      require: true
    },
    issueDoB:{
      type: String,
      require: true
    },
    issueAddress:{
      type: String,
      require:true
    },
},

  {
    timestamps: true
  }
  );
  module.exports = mongoose.model('issue', issueSchema);