const mongoose = require('mongoose')

const DB_URL = 'mongodb://localhost:27017/imooc'

mongoose.connect(DB_URL);

const models = {
  user: {
    'user': {type: String, "require": true},
    'pwd':{type: String, "require": true},
    'type': {type: String, "require": true},
    'avatar': {type: String},
    'title': {type: String},
    'company': {type: String},
    'money': {type: String}
  },
  chat: {}
}

for( let item in models) {
  mongoose.model(item, new mongoose.Schema(models[item]))
}

module.exports = {
  getModel: function(name) {
    return mongoose.model(name)
  }
} 