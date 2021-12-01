//const { Error, Lock } = require('@material-ui/icons')
const mongoose=require('mongoose')

mongoose.connect(process.env.MONGODB_URL,{
      useNewUrlParser: true,
     //useCreateIndex: true
})

