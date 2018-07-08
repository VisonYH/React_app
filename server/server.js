const express = require('express');
const userRouter = require('./router/user')


console.log(userRouter)
const app = express();

app.use('/user', userRouter)
app.listen(9093, function() {
  console.log('server is listening at 9093')
})
