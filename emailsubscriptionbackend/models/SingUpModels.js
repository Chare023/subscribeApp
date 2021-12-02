const mongoose = require('mongoose')

const subscribeTemplate = new mongoose.Schema({
  email:{
    type: String,
    required: true
  }
})

module.exports = mongoose.model('mytable', subscribeTemplate)