const express = require('express');
module.export = app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config();
const ConnectDB = require('./config/ConnectDB')

//middleware
app.use(cors());
app.use(express.json());


// routes 
const authRouter = require('./router/authRoute')
const courseRoute = require('./router/courseRoute')
const carRoute = require('./router/carRoute')


// use routes 
app.use('/api/auth', authRouter);
app.use('/api/course', courseRoute);
app.use('/api/find', carRoute)



app.get('/', (req, res) => {
  res.send('hello database');
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

