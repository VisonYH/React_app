const express = require('express')
const User = require('../model').getModel('user');

const router = express.Router();
// console.log(router)
router.get('/list', function(req, res) {
  User.find({}, function(err, doc) {
    // console.log()
    return res.json(doc)
  })
})


module.exports = router