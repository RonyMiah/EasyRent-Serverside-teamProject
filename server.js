const express = require('express');
module.export = app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const dotenv = require('dotenv').config();
const ConnectDB = require('./config/ConnectDB')

//middleware
app.use(cors());
app.use(express.json());

const userRouter = require('./router/userRouter')



app.use('/api/users', userRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})